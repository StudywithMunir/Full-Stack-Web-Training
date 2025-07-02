import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;
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
  const email = req.body["username"];
  const password = req.body["password"];

  // Check password length and also making sure it is not empty
  if (!password || password.length <= 5) {
    // sending client error as status and message
    return res.status(400).send("Password must be more than 5 characters.");
  }

  try {
    // making sure the email that user enter does not already exist into db
    const checkDuplicateEmail = await db.query("SELECT * FROM users WHERE email=$1",[email]);

     // if the count of user entered email greater than 0 (if returned 1 means email exist) it means it is duplicate email
    if (checkDuplicateEmail.rows.length > 0) {
      res.send("Email already exists, Try Logging in.")
    } else {
      try {
          await db.query("INSERT INTO users(email,password) VALUES ($1,$2)",[email,password]);
          res.render("secrets.ejs");
    } catch (error) {
        console.error(error);
    }
    } 
  } catch (error) {
    console.error(error);
  }
});

app.post("/login", async (req, res) => {
  const email = req.body["username"];
  const password = req.body["password"];

  if (!email || !password) {
    return res.status(400).send("Email and password are required.");
  }

  try {
    const result = await db.query("SELECT * FROM users WHERE email = $1", [email]);

    if (result.rows.length === 0) {
      // No user found
      return res.status(400).send("The account with this email does not exist. Please register.");
    }

    // accessing the first row which hold id,email,password as columns
    const user = result.rows[0];

    // if the user password from db not equals with the password that user entered in form
    if (user.password !== password) {
      // Wrong password
      return res.status(401).send("Your password is incorrect.");
    }

    // else
    // Successful login
    res.render("secrets.ejs");

  } catch (error) {
    console.error(error);
    res.status(500).send("Server error occurred.");
  }
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
