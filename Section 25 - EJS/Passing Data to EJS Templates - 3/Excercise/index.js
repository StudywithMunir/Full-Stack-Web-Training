import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/submit", (req, res) => {
  const numOfLetters = req.body["fName"].length + req.body["lName"].length;
  res.render("index", { numLetters: numOfLetters });
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
