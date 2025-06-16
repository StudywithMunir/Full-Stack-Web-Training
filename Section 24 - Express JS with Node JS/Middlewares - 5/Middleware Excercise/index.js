import express from "express";

// trick to fetch previous fully path of project
import { dirname } from "path";
import { fileURLToPath }  from "url"; 
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url)); //stores the path

const app = express();
const PORT = 3000;

// using bodyParser middleware
// use method should be used befor any of ROUTE handlers like get,post etc
// without this line you cant use req.body
// this line is universal and rarely changes
// since we use html form thats why using urlencoded
app.use(bodyParser.urlencoded({extended: true}));

/*
The GET method is used because the browser is requesting a resource (in this case, an HTML file) from the server.
When a user visits http://localhost:3000/, the browser makes a GET request to the server’s root (/) route.
So this route responds to that request by sending an HTML file.
*/
// requesting resource
app.get("/",(req,res)=>{
    // sending the index.html as response on root endpoint
    res.sendFile(__dirname + "/public/index.html"); //builds the absolute file path to the HTML file that should be sent
});

// POSTING DATA on /submit endpoint (sending resource)
app.post("/submit",(req,res)=>{
    // with req.body we can send something to user
    console.log(req.body);
});

app.listen(PORT,()=>{
    console.log(`Server started, Listening on PORT ${PORT}`);
});