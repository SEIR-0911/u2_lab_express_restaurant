const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3003

const app = express()

const appController = require('./controllers/AppController')
const entreController = require('./controllers/EntreController')
const dessertController = require('./controllers/DesController')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
   res.send({ msg: 'Server Running'})
})

app.get('/appitizers', appController.getApps)
app.get('/appitizers/:id', appController.getOneApp)
app.get('/entres', entreController.getEntres)
app.get('/entres/:id', entreController.getOneEntre)
app.get('/desserts', dessertController.getDesserts)
app.get('/desserts/:id', dessertController.getOneDessert)


app.listen(PORT, () => console.log(`Server running on ${PORT}`))
