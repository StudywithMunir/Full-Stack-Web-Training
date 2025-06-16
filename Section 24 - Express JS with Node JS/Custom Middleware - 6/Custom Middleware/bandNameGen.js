import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

// Middleware to parse URL-encoded form data
app.use(bodyParser.urlencoded({ extended: true }));

// Custom middleware ONLY for POST request
function bandNameGenerator(req, res, next) {
  console.log(req.body); // Debug
  const street = req.body["street"];
  const pet = req.body["pet"];

  if (!street || !pet) {
    return res.send("<h1>Missing street or pet name. Please go back and try again.</h1>");
  }

  res.locals.bandName = street + pet;
  next();
}

// Route for form page
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// Route that uses the middleware only for POST /submit
app.post("/submit", bandNameGenerator, (req, res) => {
  res.send(`<h1>Your band name is:</h1><h2>${res.locals.bandName} ✌️</h2>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
