import express from "express";

const app = express();
const PORT = 3000;

// custom middleware
// first method (direct approach)
// app.use((req,res,next) =>{
//     console.log(`Method: ${req.method}, URL: ${req.url}`);
//     next();
// });
// next() will allow to move to next line of code so call the middleware in order
// like if you have custom middleware and want to run before morgan then include this before the morgan so 
// next() on custom after run jumps to morgan


// 2nd method (call the custom function in app.use)
function logger(req,res,next) {
    console.log(`Method: ${req.method}, URL: ${req.url}`);
    next();
}
app.use(logger);

app.get("/",(req,res)=>{
    res.send("Hello");
});

app.listen(PORT,()=>{
    console.log(`Server started, Listening on PORT ${PORT}`);
});