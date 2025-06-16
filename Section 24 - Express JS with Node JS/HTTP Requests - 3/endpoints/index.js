import express from "express";

const app = express();
const PORT = 3000;

// Handling index-page / root-page endpoint (/)
app.get("/", (req, res) => {
    res.send(`
        <nav style="background:#eee; padding:10px;">
            <a href="/" style="margin-right:15px;">Home</a>
            <a href="/about" style="margin-right:15px;">About</a>
            <a href="/contact">Contact</a>
        </nav>
        <h1>Express JS is a Powerful Backend Framework</h1>
        <p>Welcome to our Express.js app!</p>
    `);
});



// Handling contact endpoint (/contact)
app.get("/contact", (req, res) => {
    res.send(`
        <h1>Contact Us</h1>
        <p>You can reach us at:</p>
        <ul>
            <li>Email: contact@example.com</li>
            <li>Phone: +1 234 567 890</li>
            <li>Address: 123 Express Street, JS City</li>
        </ul>
    `);
});

// Handling about endpoint (/about)
app.get("/about", (req,res)=>{
    res.send(`
        <h1>About Express.js</h1>
        <p>Express.js is a minimal and flexible Node.js web application framework.</p>
        <p>It provides tools to build web and mobile applications quickly and efficiently.</p>
        <p>Express is known for its simplicity and speed.</p>
    `);
});

app.listen(PORT, ()=> {
    console.log(`Server started, Listening on PORT ${PORT}.`);
});