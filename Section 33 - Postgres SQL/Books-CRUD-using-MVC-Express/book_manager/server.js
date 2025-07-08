import express from "express";
import dotenv from  "dotenv";
import { dirname } from "path";
import { fileURLToPath } from "url";

// importing all the routes from bookRoutes.js
import bookRoutes from "./routes/bookRoutes.js";

// Get the current directory name
const __dirname = dirname(fileURLToPath(import.meta.url));


// initializing the .env
dotenv.config();

// creating instance of express
const app = express();

// set view engine and public folder
app.set("view engine","ejs");
app.set("views",__dirname + "/views");
app.use(express.static(__dirname+"/public"));


// Middleware(for form)
app.use(express.urlencoded({extended: true}));


// Routes
// Mount all book-related routes at the homepage ("/") endpoint
app.use("/", bookRoutes);


// Start server
// it will start on port 3000 if available else on 4000 port
const PORT = process.env.PORT || 4000;
app.listen(PORT,()=>{
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});