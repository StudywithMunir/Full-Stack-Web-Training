import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
// const fruits = ["Apple","Mango","Peach","Lemon"];
const data = {
    title: "EJS Tags",
    seconds: new Date().getSeconds(),
    fruits: ["Apple","Mango","Peach","Lemon"],
    htmlContent: "<em>Absolute Bullshit</em>"
};

app.set("view engine", "ejs");

app.get("/",(req,res)=>{
    res.render(
        __dirname + "/views/index.ejs", data
        // {
        //     // either we pass the variable as object property
        //     // fruits: fruits
        //     // or we can pas the variable that holds data in object form
        // }
    );
});


app.listen(PORT,()=>{
    console.log(`Listening on PORT ${PORT}`);
});