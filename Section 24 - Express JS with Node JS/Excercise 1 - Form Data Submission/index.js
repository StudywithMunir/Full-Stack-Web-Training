import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.urlencoded({extended: true}));

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit",(req,res)=>{
    console.log(req.body);
    // res.send("<h1>Form Data Submitted</h1>");
    res.redirect("/?submitted=true");
});

app.listen(PORT,()=> {
    console.log(`Server started, Listening on PORT ${PORT}.`);
});