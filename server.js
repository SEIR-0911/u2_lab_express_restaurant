const express = require("express");

// Middleware: cors
const cors = require("cors");

const PORT = process.env.PORT || 3001;

const app = express();

const appController = require("./Controllers/Appetizers");
//const dogController = require("./controllers/dogController");

// Middleware:
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//non middleware: the promise
app.get("/", (request, response) => {
  response.send({ msg: "Server Running" });
});

app.get("/appetizers", appController.getAppetizers);

//app.get("/appetizers/:index", appController.getAppetizer);

app.get("/appetizers/:id", appController.getAppetizerbyID);

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
