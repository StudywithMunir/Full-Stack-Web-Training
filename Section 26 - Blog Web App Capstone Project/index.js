import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));

let posts = [];
let idCounter = 1;

app.get("/", (req, res) => {
  res.render("home", { posts });
});

app.get("/new", (req, res) => {
  res.render("new");
});

app.post("/create", (req, res) => {
  const { title, content } = req.body;
  posts.push({ id: idCounter++, title, content });
  res.redirect("/");
});

app.get("/edit/:id", (req, res) => {
  const post = posts.find(p => p.id == req.params.id);
  if (post) {
    res.render("edit", { post });
  } else {
    res.redirect("/");
  }
});

app.post("/update/:id", (req, res) => {
  const post = posts.find(p => p.id == req.params.id);
  if (post) {
    post.title = req.body.title;
    post.content = req.body.content;
  }
  res.redirect("/");
});

app.post("/delete/:id", (req, res) => {
  posts = posts.filter(p => p.id != req.params.id);
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
