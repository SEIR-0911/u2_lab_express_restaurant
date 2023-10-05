const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001

const app = express()

const appsController = require('./controllers/Appetizers.js')
const dessController = require('./controllers/Desserts.js')
const entController = require('./controllers/Entrees.js')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))




app.get('/apps', appsController.getApps)
app.get('/apps/:s', appsController.getApp)

app.get('/dess', dessController.getdesss)
app.get('/dess/:id', dessController.getdess)

app.get('/ent', entController.getEnts)
app.get('/ent/:id', entController.getEnt)

app.listen(PORT, () => console.log(`Server running on ${PORT}`))