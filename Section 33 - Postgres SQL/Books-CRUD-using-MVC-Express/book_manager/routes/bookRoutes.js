import express from "express";

// importing all functions we created in bookController.js
// we can also use * to import all functions without thier names
import {
    renderBooks,
    createBook,
    editBook,
    removeBook,
} from '../controllers/bookController.js';

/*
express.Router() is a mini Express app that handles routes in a
 modular and maintainable way. It lets you define route handlers
  (GET, POST, etc.) in separate files or modules, rather than
   cluttering your app.js or server.js.
*/
const router = express.Router();


// defining routes using router
// syntax is like we mention http req method then inside we pass endpoint,functionality associated to that endpoint
router.get("/",renderBooks);
router.post("/add",createBook);
router.post("/update/:id",editBook);
router.post("/delete/:id",removeBook);

// exporting router variable which now holds all enpoints and their assoicated functionality
export default router;