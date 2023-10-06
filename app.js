const express = require('express')
const cors = require('cors')
const appetizerController = require("./controllers/AppetizerController.js");
const entreeController = require("./controllers/EntreeController.js");
const dessertController = require("./controllers/DessertController.js");
const menuController = require("./controllers/MenuController.js");


const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes go here

app.listen(PORT, () => console.log(`Server running on ${PORT}`))


app.get('/', (request, response) => {
    response.send({ msg: 'Server Running' })
  })




  app.get("/appetizers", appetizerController.getAppetizers);
  app.get("/appetizers/id/:id", appetizerController.getAppetizer);
  app.get("/appetizers/name/:name", appetizerController.getAppetizerName);




  app.get("/entrees", entreeController.getEntrees);
  app.get("/desserts", dessertController.getDesserts);
  app.get("/menu", menuController.getMenu);
//   app.get("/menu2", appetizerController.appetizers);

  



