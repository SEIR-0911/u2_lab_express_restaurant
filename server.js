const express = require("express");
const cors = require("cors");
const menuController = require('./controllers/menuController');

const PORT = process.env.PORT || 3001;

// Middleware will be required here
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//routs
app.get("/", (req, res) => res.send({ msg: "Welcome The Express-taurant Menu App!" }));
app.get("/appetizers", menuController.getAppetizers);
app.get("/appetizers/:id", menuController.getOneAppetizers);

app.get("/entrees", menuController.getEntrees);
app.get("/entrees/:id", menuController.getOneEntree);

app.get("/desserts", menuController.getDesserts);
app.get("/desserts/:id", menuController.getOneDessert);

app.listen(PORT, () => console.log(`Serving up delicious cousins on port ${PORT} 🍗`));