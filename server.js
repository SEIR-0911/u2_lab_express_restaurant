const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3001;
const app = express();

app.listen(PORT, () => console.log(`Serving up delicious cousins on port ${PORT} 🍗`));

//Start off by defining a simple GET route:
app.get("/hello", (req, res) => {
    res.send("Hello! Welcome to Frute APP.");
});

//    These Italian appetizers are crowd-pleasing starters to any Italian-style meal! Pick from bruschetta, crostini, caponata and more.
    

/**
 * An Express Server with Index and Show routes for
 *  at least 3 different data models - 
 * Appetizers, Entrees, and Desserts
 */