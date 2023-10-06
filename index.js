//BOILERPLATE
const express = require('express')
const PORT = process.env.PORT || 3001
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')

const app = express()

app.use(cors())
app.use(logger())
app.use(bodyParser())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//Require the controller modules created
const appsController = require('./controllers/appetizersController.js')
const entreesController = require('./controllers/entreesController')
const dessertsController = require('./controllers/dessertsController')

//When '/apps', '/entrees', or '/desserts' are hit in browser, the functions created in the controller modules are called back.  Controller names reference the const variables created in the require statements above.
app.get('/apps', appsController.getApps)
app.get('/entrees', entreesController.getEntrees)
app.get('/desserts', dessertsController.getDesserts)

app.get('/apps/:id', appsController.getAppById)
app.get('/entrees/:id', entreesController.getEntreeById)
app.get('/desserts/:id', dessertsController.getDessertById)

app.get('/appsgf', appsController.getGFApps)
app.get('/entreesgf', entreesController.getGFEntrees)
app.get('/dessertsgf', dessertsController.getGFDesserts)

app.listen(PORT,() => {
    console.log(`Express server listening on port ${PORT}`)
})