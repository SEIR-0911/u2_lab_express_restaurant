const express = require('express')

const appetizerControllers = require('./controllers/appetizerControllers')
const dessertControllers = require('./controllers/dessertControllers')
const entreeControllers = require('./controllers/entreeControllers')


const app = express()
const PORT = process.env.PORT || 3001


app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`)
})

app.get('/', (req, res) => {
    res.send('working!')
})

app.get('/appetizers', appetizerControllers.getAppetizers)
app.get('/desserts', dessertControllers.getDesserts)
app.get('/entrees', entreeControllers.getEntrees)

app.get('/appetizers/:id', appetizerControllers.getAppsById)
app.get('/desserts/:id', dessertControllers.getDessertsById)
app.get('/entrees/:id', entreeControllers.getEntreesById)
