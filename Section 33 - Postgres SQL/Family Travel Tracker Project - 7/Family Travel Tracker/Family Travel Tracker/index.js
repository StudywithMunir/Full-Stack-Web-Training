// ========================
// 📦 Module Imports
// ========================
import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

// ========================
// 🚀 App Configuration
// ========================
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// ========================
// 🗃️ PostgreSQL Connection
// ========================
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "Munir@12",
  port: 5432,
});
db.connect();

// ========================
// 🧠 Global State
// ========================
let currentUserId = 1;
let users = [
  // Initial dummy users (will be replaced from DB)
  { id: 1, name: "Angela", color: "teal" },
  { id: 2, name: "Jack", color: "powderblue" },
];

// ========================
// 📥 Utility Functions
// ========================

// Get list of visited country codes for current user
async function checkVisited() {
  const result = await db.query(
    "SELECT country_code FROM visited_countries WHERE user_id = $1",
    [currentUserId]
  );
  return result.rows.map((row) => row.country_code);
}

// Fetch all users and update the `users` array
async function getCurrentUser() {
  const result = await db.query("SELECT * FROM users");
  users = result.rows;
  return users.find((user) => user.id == currentUserId);
}

// ========================
// 🌍 Routes
// ========================

// GET: Home page
app.get("/", async (req, res) => {
  const countries = await checkVisited();
  const currentUser = await getCurrentUser();

  res.render("index.ejs", {
    countries,
    total: countries.length,
    users,
    color: currentUser.color,
  });
});

// POST: Add visited country
app.post("/add", async (req, res) => {
  const input = req.body.country?.trim();
  const currentUser = await getCurrentUser();

  if (!input) return res.redirect("/");

  try {
    // Lookup country code
    const result = await db.query(
      "SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%';",
      [input.toLowerCase()]
    );

    if (result.rows.length === 0) return res.redirect("/");

    const countryCode = result.rows[0].country_code;

    // Check for duplicates
    const duplicate = await db.query(
      "SELECT * FROM visited_countries WHERE country_code = $1 AND user_id = $2;",
      [countryCode, currentUserId]
    );
    if (duplicate.rows.length > 0) return res.redirect("/");

    // Insert new country visit
    await db.query(
      "INSERT INTO visited_countries (country_code, user_id) VALUES ($1, $2);",
      [countryCode, currentUserId]
    );

    res.redirect("/");
  } catch (error) {
    console.error("Error adding country:", error);
    res.redirect("/");
  }
});

// POST: User switch or add new
app.post("/user", async (req, res) => {
  const action = req.body.add;
  if (action === "new") {
    return res.render("new.ejs");
  } else {
    currentUserId = req.body.user;
    return res.redirect("/");
  }
});

// POST: Add new user
app.post("/new", async (req, res) => {
  const { name, color } = req.body;

  try {
    const result = await db.query(
      "INSERT INTO users (name, color) VALUES ($1, $2) RETURNING *;",
      [name, color]
    );

    currentUserId = result.rows[0].id;
    res.redirect("/");
  } catch (error) {
    console.error("Error creating user:", error);
    res.redirect("/");
  }
});

// ========================
// 🚦 Start Server
// ========================
app.listen(port, () => {
  console.log(`🌐 Server running at: http://localhost:${port}`);
});
