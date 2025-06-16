// Importing express module using modern ESM syntax
import express from "express";
// creating express object
const app = express();

// creating variable to store port
const PORT = 3000;

// using GET request so when user request a resource he can see content
// get expects 2 parameters / means the home route or root URL.
// You can change this to something like: app.get("/about", ...);  // Will match http://localhost:3000/about
//  callback function that Express runs when someone visits the route.
app.get("/", (req,res) =>{
    res.send("Hello for Express Server");
});
// res.send("Hello for Express Server")
// So when someone visits http://localhost:3000/, they’ll see:
// Hello for Express Server
// Hey Express! When someone sends a GET request to /, run this function. Use res to send back a message to the browser.


// using expres object we access the listen method of express that takes 2 parameters
// first is port number 
// second will be callback which will be triger when server is setup successfully
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}.`);
});