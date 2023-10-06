const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const appetizersController = require('./controllers/AppetizersController')
const entreesController = require('./controllers/EntreesController')
const dessertsController = require('./controllers/DessertsController')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send([appetizersController.appetizers, entreesController.entrees, dessertsController.desserts])
})
app.get('/appetizers', (appetizersController.getAppetizers))
app.get('/appetizers/info/:name', appetizersController.getAppByName)
app.get('/appetizers/:id', (appetizersController.getOneApp))
app.get('/entrees', (entreesController.getEntrees))
app.get('/entrees/info/:name', entreesController.getEntreeByName)
app.get('/entrees/:id', (entreesController.getOneEntree))
app.get('/desserts', (dessertsController.getDesserts))
app.get('/desserts/info/:name', (dessertsController.getDessertByName))
app.get('/desserts/:id', (dessertsController.getOneDessert))

app.get('*', (req, res) => {
    res.send('Nothing to see here')
})

app.listen(PORT, () => console.log(`Server running on ${PORT}`))