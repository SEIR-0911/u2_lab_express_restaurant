const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001

const app = express()

const appetizerController = require('./controllers/AppetizerController')
const dessertController = require('./controllers/DessertController')
const entreeController = require('./controllers/EntreeController')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send({msg: 'Server Running'}

    )
})


app.get('/appetizers', appetizerController.getAppetizers )
app.get('/appetizers/:id', appetizerController.getAppetizers )

app.get('/desserts', dessertController.getDesserts )
app.get('/desserts/:id', dessertController.getDessert )

app.get('/entrees', entreeController.getEntrees )
app.get('/entrees/:id', entreeController.getEntree )




app.listen(PORT, () => console.log(`Server is running on ${PORT}`))