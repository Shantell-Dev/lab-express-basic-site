const express = require("express");
const app = express();
const PORT = 3000;

// Serve static content from the "public" directory
app.use(express.static("public"));

// Define routes
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/public/about.html");
});

app.get("/contact", (req, res) => {
    res.sendFile(__dirname + "/public/works.html");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
