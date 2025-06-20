import express from "express";
import axios from "axios";

const app = express();
const PORT = 3000;
const API_URL = "https://sv443.net/jokeapi/v2";

// API provided variables
const categories = ["Programming", "Misc", "Pun", "Spooky", "Christmas"];
const params = [
    "blacklistFlags=nsfw,religious,racist",
    "idRange=0-100"
];

app.use(express.static("public"));


app.get("/", async (req,res)=>{
    try {
        const response = await axios.get(`${API_URL}/joke/${categories.join(',')}?${params.join('&')}`);
        const jokeData = response.data;

        let joke = "";

        if (jokeData.type === "single") {
            joke = jokeData.joke;
        } else {
            joke = `${jokeData.setup} ... ${jokeData.delivery}`;
        }

        res.render("index.ejs",{joke});

    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
});

app.listen(PORT,()=>{
    console.log(`Listening on PORT ${PORT}`);
});