const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001

const app = express()

const appetizerController = require('./controllers/appetizerController')
const dessertController = require('./controllers/dessertController')
const entreeController = require('./controllers/entreeController')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.get("/", (request, response) => {
    response.send({ msg: "Server Running" });
  });

app.get('/appetizers', appetizerController.getAppetizers)
app.get('/appetizers/:id', appetizerController.getAppetizerById)

app.get('/entrees', entreeController.getEntrees)
app.get('/entrees/:id', entreeController.getEntreeById)

app.get('/desserts', dessertController.getDesserts)
app.get('/desserts/:id', dessertController.getDessertById)

app.listen(PORT, () => console.log(`Server running on ${PORT}`))