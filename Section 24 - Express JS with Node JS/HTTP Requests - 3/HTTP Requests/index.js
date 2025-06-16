import express from "express";
const app = express();
const PORT = 3000;

app.get("/", (req,res) => {
    // res.send("Express JS is a backend Framework");
    // sending html as response
    res.send("<h1>Express JS is a popular Backend Framework</h1>");
    // printing request from browser
    // console.log(req);
    // printing request rawHeaders method
    // console.log(req.rawHeaders);
});

app.listen(PORT, () => {
    console.log(`Server started, Listening on ${PORT} PORT.`);
});