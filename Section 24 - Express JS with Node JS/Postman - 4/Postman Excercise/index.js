import express from "express";

const app = express();
const PORT = 3000;

// Root route — GET request (sends a resource)
app.get("/", (req, res) => {
    res.send("<h1>HTTP Status Codes</h1>");
});

/*
 * POST /register
 * 201 Created: The request has succeeded and a new resource has been created as a result.
 * Commonly used in response to POST requests.
 */
app.post("/register", (req, res) => {
    res.sendStatus(201);    
});

/*
 * PUT /user/munir
 * 200 OK or 204 No Content are usually used, but 201 can also be used if a new resource is created.
 * PUT replaces the entire resource.
 */
app.put("/user/munir", (req, res) => {
    res.sendStatus(200); // Or 204 (No Content)
});

/*
 * PATCH /user/munir
 * Used for partial updates. 200 or 204 is typically used. 201 is NOT standard here.
 */
app.patch("/user/munir", (req, res) => {
    res.sendStatus(200); // Or 204 (No Content)
});

/*
 * DELETE /user/munir
 * 200 OK: Resource deleted successfully.
 * 204 No Content: Deletion was successful, but no content returned.
 */
app.delete("/user/munir", (req, res) => {
    res.sendStatus(200); // Or 204
});

app.listen(PORT, () => {
    console.log(`Server started, Listening on PORT ${PORT}.`);
});
