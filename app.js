const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001

const app = express()

const appetizersController = require('./controllers/appetizersController')
const dessertsController = require('./controllers/dessertsController')
const entreesController = require('./controllers/entreesController')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (request, response) => {
    response.send({ msg: 'Server Running'})
})
app.get('/Appetizers', appetizersController.getAppetizers)
    //http://localhost:3001/AppetizerName/{AppetizerName}
app.get('/AppetizerName/:name', appetizersController.getAppetizerByName);
app.get('/Appetizer/:id', appetizersController.getAppetizer)


app.get('/Desserts', dessertsController.getDesserts)
app.get('/DessertName/:name', dessertsController.getDessertByName);
app.get('/getDessert/:id', dessertsController.getDessert)

app.get('/Entrees', entreesController.getEntrees)
app.get('/EntreeName/:name', entreesController.getEntreeByName);
app.get('/getEntree/:id', entreesController.getEntree)

app.listen(PORT, () => console.log(`Server is running on ${PORT}`))