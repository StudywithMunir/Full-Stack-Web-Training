import express from "express";
import axios from "axios";

const app = express();
const PORT = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

app.use(express.static("public"));

app.get("/",async (req,res)=>{
    try {
        const result = await axios.get(`${API_URL}random`);
        // dont use JSON.stringify in this case it truns all the properties into string
        // and result.data.secret will return undefined and value will nots shown in frontend
        console.log(result);
        res.render("index.ejs", {
        secret: result.data.secret,
        user: result.data.username,
        });

    } catch (error) {
        console.error("Error occured: " + error.message);
        res.sendStatus(500);
    }
});

app.listen(PORT,()=>{
    console.log(`Listening on PORT ${PORT}`);
});