import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

//creating database object
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "Munir@12",
  port: 5432,
});

// starting db connection
db.connect();

// this holds country and capital (after using quiz = res.rows all the data will be replace by db data)
// so instead of just seeing this 3 countries we see all the countries from db
let quiz = [
  { country: "France", capital: "Paris" },
  { country: "United Kingdom", capital: "London" },
  { country: "United States of America", capital: "New York" },
];

// instead of hard coded quiz objects we use the data from db
db.query("SELECT * FROM capitals",(err,res)=>{
  if (err) {
    console.error(`Error executing the Query: ${err.stack}`);
  } else {
    // passing all the rows(in array form) into quiz array
    quiz = res.rows;
  }
  // closing db connection
  db.end();
});

// counter that holds the count of correct answers
let totalCorrect = 0;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let currentQuestion = {};

// GET home page
app.get("/", async (req, res) => {
  totalCorrect = 0;
  await nextQuestion();
  console.log(currentQuestion);
  res.render("index.ejs", { question: currentQuestion });
});

// POST a new post
app.post("/submit", (req, res) => {
  let answer = req.body.answer.trim();
  let isCorrect = false;
  if (currentQuestion.capital.toLowerCase() === answer.toLowerCase()) {
    // on correct answer increasing counter
    totalCorrect++;
    console.log(totalCorrect);
    isCorrect = true;
  }

  nextQuestion();
  res.render("index.ejs", {
    question: currentQuestion,
    wasCorrect: isCorrect,
    totalScore: totalCorrect,
  });
});

async function nextQuestion() {
  const randomCountry = quiz[Math.floor(Math.random() * quiz.length)];

  // passing random country from quiz array to the current question object
  currentQuestion = randomCountry;
}

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
