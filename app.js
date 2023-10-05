const express = require('express')
const cors = require('cors')
const appetizerController = require('./controllers/Appetizers.js')
const dessertController = require('./controllers/Desserts.js')
const entreeController = require('./controllers/Entrees.js')
const drinkController = require('./controllers/Drinks.js')


const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// Routes go here
app.get('/', (request, response) => {
    response.send({ msg: 'Food Server Running' })
  })

app.get('/appetizers', appetizerController.index)
app.get(`/appetizers/:id`, appetizerController.byID)
app.get(`/appetizers/byName/:name`, appetizerController.byName)

app.get('/entrees', entreeController.index)
app.get(`/entrees/:id`, entreeController.byID)


app.get('/desserts', dessertController.index)
app.get(`/desserts/:id`, dessertController.byID)

app.get('/drinks', drinkController.index)
app.get(`/drinks/:id`, drinkController.byID)
app.get(`/drinks/:category/:name`, drinkController.byCategorybyName)



app.listen(PORT, () => console.log(`Server running on ${PORT}`))
