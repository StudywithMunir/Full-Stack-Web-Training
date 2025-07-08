import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt from "bcrypt";

// STEP - 1
import session from "express-session";
import passport from "passport";
import { Strategy } from "passport-local";

// STEP - 9
import env from "dotenv";

import GoogleStrategy from "passport-google-oauth2";

const app = express();
const port = 3000;
const saltRounds = 10;
env.config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// STEP - 2
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,

  cookie: {
    maxAge: 1000 * 60 * 60 * 24,
  },
}));

// STEP - 3
app.use(passport.initialize());
app.use(passport.session());

const db = new pg.Client({
  // after step-9 adding enviroment variables
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});
db.connect();

// STEP - 4
// after STEP-11 or from start adding local since we implementing 2 strategies
passport.use("local",new Strategy(async function (username,password,done) {
  try {
    const result = await db.query("SELECT * FROM users WHERE email=$1",[username]);
    if (result.rows.length === 0) {
      return done(null,false);
    }
    const user = result.rows[0];
    bcrypt.compare(password,user.password,(err,isMatch)=>{
      if (err) return done(err);
      if (isMatch) {
        return done(null,user);
      } else {
        return done(null,false);
      }
    });
  } catch (error) {
    console.error(error);
  }
}));

// store user in session
passport.serializeUser((user,done)=>{
  return done(null,user.id);
});

// reterive user info from session
passport.deserializeUser(async (id,done) => {
  try {
    const result = await db.query("SELECT * FROM users WHERE id=$1",[id]);
    const user = result.rows[0];
    done(null,user);
  } catch (error) {
    done(error);
  }
});


// STEP - 10
passport.use("google",new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:3000/auth/google/secrets",
  userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
}, 
// callback if above google sign in succeeded
async (accessToken,refreshToken,profile,done) => {
  console.log(profile); //prints all the info when user clicked on sign in with google
  try {
    // checks if that email already exists in our database
    const result = await db.query("SELECT * FROM users WHERE email=$1",[profile.email]);

    // if there is no account with that email
    if (result.rows.length === 0) {
      // creating new user
      const newUser = await db.query("INSERT INTO users(email,password) VALUES($1,$2)"
        ,[profile.email,"google"]);  //since sign in with Google dont give password we can either save user id or add custom password like google so we know that user uses signin with google
      return done(null,newUser.rows[0]); //success and passed the first matched row
    } else {
      // already existing user
      done(null,result.rows[0]);
    }
  } catch (error) {
    console.error(error);
    
  }
}
));


// STEP - 11
app.get("/auth/google",passport.authenticate("google",{
  scope: ["profile","email"],
}));


// STEP - 12
app.get("/auth/google/secrets",passport.authenticate("google",{
  successRedirect: "/secrets",
  failureRedirect: "/login",
})); 

// STEP - 6
app.get("/secrets",(req,res)=>{
  console.log(req.user);
  if (req.isAuthenticated()) {
     //since req.user hold all info about user we can access email entered by user
    res.render("secrets.ejs",{email: req.user.email});
  } else {
    res.redirect("/login");
  }
});

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

// STEP - 7
app.get("/logout",(req,res)=>{
  req.logout((error)=>{
    if (error) console.log(error);
    res.redirect("/");
  });
});

app.post("/register", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  try {
    const checkResult = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (checkResult.rows.length > 0) {
      res.send("Email already exists. Try logging in.");
    } else {
      //hashing the password and saving it in the database
      bcrypt.hash(password, saltRounds, async (err, hash) => {
        if (err) {
          console.error("Error hashing password:", err);
        } else {
          console.log("Hashed Password:", hash);
          // STEP - 8
          const result = await db.query(
            "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *",
            [email, hash]
          );

          const user = result.rows[0];
          req.logIn(user,(err)=>{
            if (err) {
              console.log("Login error after registeration: ",err);
              res.redirect("/login");
            } else {
              res.redirect("/secrets");
            }
          });
        }
      });
    }
  } catch (err) {
    console.log(err);
  }
});

// STEP - 5
app.post("/login",passport.authenticate('local',{
  successRedirect: "/secrets",
  failureRedirect: "/login",
}));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
