const express = require('express')
const cors = require('cors')
const appetizersController = require('./controllers/appetizersController')
const entreesController = require('./controllers/entreesController')
const dessertsController = require('./controllers/dessertsController')
const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//routes go here
app.get('/', (req, res) => {
    res.send('Welcome to the Express-taurant! Check out our menu options')
})

app.get('/appetizers', appetizersController.getAppets)
app.get('/appetizers/:id', appetizersController.appetizerById)

app.get('/entrees', entreesController.getEntrees)
app.get('/entrees/:id', entreesController.entreeById)

app.get('/desserts', dessertsController.getDesserts)
app.get('/desserts/:id', dessertsController.dessertById)

//this goes at the very bottom
app.listen(PORT, () => console.log(`Server running on ${PORT}`))