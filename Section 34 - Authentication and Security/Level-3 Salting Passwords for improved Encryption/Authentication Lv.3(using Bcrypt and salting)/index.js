import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

// importing Bcrypt module
import bcrypt, { hash } from "bcrypt";

const app = express();
const port = 3000;

// Defining the salt rounds
const saltRounds = 10;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "secrets",
  password: "Munir@12",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
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

      // Hashing Password using bcrypt hashing algorithm
      bcrypt.hash(password, saltRounds, async (err,hashedPassword)=>{
        if (err) {
          console.log("Error hashing Password: " + err);
        } else {
          const result = await db.query(
          "INSERT INTO users (email, password) VALUES ($1, $2)",
          [email, hashedPassword]
          );
          console.log(result);
          res.render("secrets.ejs");
        }
      });
    }
  } catch (err) {
    console.log(err);
  }
});

app.post("/login", async (req, res) => {
  const email = req.body.username;
  const loginPassword = req.body.password;

  try {
    const result = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    if (result.rows.length > 0) {
      const user = result.rows[0];
      const storedHashedPassword = user.password;

      // comparing the passwords so user can login
      bcrypt.compare(loginPassword,storedHashedPassword,(err,match)=>{
        if (err) {
          console.log("Error occured: " + err);
        }else{
          // if both password matches it return true and render secrets.ejs
          if (match) {
            res.render("secrets.ejs");
          } else {
            res.send("Incorrect Password");
          }
        }
      });
    } else {
      res.send("User not found");
    }
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
