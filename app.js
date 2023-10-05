const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001

const app = express()




app.get('/', (req, res) => {
    res.send({msg: 'Server looking good!'})
})

const appsController = require('./controller/appetizers')
const dessertController = require('./controller/desserts')
const entreeController = require('./controller/entrees')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))



app.get('/apps', appsController.getApps)
app.get('/apps/:id', appsController.getApp)
app.get('/desserts', dessertController.getDesserts)
app.get('/desserts/:id', dessertController.getDessert)
app.get('/entrees', entreeController.getEntrees)
app.get('/entrees/:id', entreeController.getEntree)


app.get('/meal', appsController.getApp, dessertController.getDessert, entreeController.getEntree)

console.log(entreeController.getEntree)

app.listen(PORT, () => console.log(`Server is running on ${PORT}`))