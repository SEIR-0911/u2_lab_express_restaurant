const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001

const app = express()


const appController = require('./controllers/AppController')
const entreeController = require('./controllers/EntreeController')
const drinkController = require('./controllers/DrinkController')


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send( { msg: `Server Running`} )
})

//app routes
app.get('/apps', appController.getApps)
app.get('/apps/:id', appController.getApp)

//entree routes
app.get('/entrees', entreeController.getEntrees)
app.get('/entrees/:id', entreeController.getEntree)

//drink routes
app.get('/drinks', drinkController.getDrinks)
app.get('/drinks/:id', drinkController.getDrink)
app.get('/drinks/:category/:name', drinkController.byCategorybyName)



//app.listen always goes at the bottom of the app.get functions
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})
