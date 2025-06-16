import express from "express";
// import ejs from "ejs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

// returns today day in index form (0-6) 0-sunday ... 6-saturday
const today = new Date();
const dayOfWeek = today.getDay();

// It automatically loads the ejs module from your installed node_modules folder
app.set("view engine", "ejs");


app.get("/",(req,res)=>{
    // rendering index.ejs from views folder
    res.render(__dirname + "/views/index.ejs",
        {
            day: dayOfWeek
        }
    );
});

app.listen(PORT,()=>{
    console.log(`Listening on PORT ${PORT}`);
});