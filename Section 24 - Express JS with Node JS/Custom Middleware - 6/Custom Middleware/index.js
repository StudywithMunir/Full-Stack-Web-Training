import express from "express";
import morgan from "morgan";

const app = express();
const PORT = 3000;

// using morgan middleware for logging
// combined is output format
app.use(morgan("combined"));

app.get("/",(req,res)=>{
    res.send("Hello");
});

app.listen(PORT,()=>{
    console.log(`Server started, Listening on PORT ${PORT}`);
});