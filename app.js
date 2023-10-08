const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001

const app = express()

const appetizerController = require('./controllers/AppetizersController')
const entreeController = require('./controllers/EntreesController')
const dessertsController = require('./controllers/DessertsController')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send({
        msg: 'Server Running'
    })
})

app.get('/appetizers', appetizerController.getAppetizers)

app.get('/appetizers/:id', appetizerController.getAppetizer)
app.get('/appetizers/name/:name', appetizerController.getAppetizerByName)


app.get('/entrees', entreeController.getEntrees)


app.get('/entrees/:id', entreeController.getEntree)

app.get('/desserts', dessertsController.getDesserts)
app.get('/desserts/:id', dessertsController.getDessert)



app.listen(PORT, () => console.log(`Server running on ${PORT}`))