const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001

const app = express()

const appetizersController = require('./controllers/AppetizersController')
const dessertsController = require('./controllers/DessertsController')
const entreesController = require('./controllers/EntreesController')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send({ msg: 'Server Running' })
  })

app.get('/appetizers', appetizersController.getAllAppetizers)
app.get('/appetizers/:id', appetizersController.getOneAppetizer)
app.get('/desserts', dessertsController.getAllDesserts)
app.get('/desserts/:id', dessertsController.getOneDessert)
app.get('/entrees', entreesController.getAllEntrees)
app.get('/entrees/:id', entreesController.getOneEntree)

app.listen(PORT, () => console.log(`Server running on ${PORT}`))