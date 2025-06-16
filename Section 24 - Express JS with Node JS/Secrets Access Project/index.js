import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
const secretPass = "ILoveProgramming";

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Middleware to serve static files from the "public" directory
app.use(express.static("public"));

function checkPassword(req, res, next) {
    const pass = req.body.password;

    if (pass === secretPass) {
        // res.locals.accessGranted = true; creates a local variable named accessGranted within the res.locals object.
        res.locals.accessGranted = true; // Use a boolean for clarity
    } else {
        res.locals.accessGranted = false;
    }
    next();
}

app.use(checkPassword);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", checkPassword, (req, res) => {
    if (res.locals.accessGranted) {
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        res.status(401).send("<h1>Access Denied</h1>"); // Use status code
    }
});

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`); // Correct template literal
});
