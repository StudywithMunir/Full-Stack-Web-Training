import express from "express";
import {  dirname  } from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.set("view engine","ejs");
app.set("views",__dirname+"/views");

// specifying static files folder
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("index");
});

// controlling about and contact endpoint route handling
app.get("/about",(req,res)=>{
    res.render("about");
});

app.get("/contact",(req,res)=>{
    res.render("contact");
});

app.listen(PORT,()=>{
    console.log(`Listening on PORT ${PORT}`);
});