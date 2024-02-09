const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const appetizers = require('./menuController/Appetizers.js')
const entrees = require('./menuController/Entrees.js')
const desserts = require('./menuController/Desserts.js')

app.get('/', (req, res) => {
	res.send({ msg: 'Server Running' })
})

app.get('/appetizers', appetizers.getAppetizers)
app.get('/appetizers/:id', appetizers.getAppetizerById)
//Filter by min and max price
app.get('/filterAppetizers', appetizers.filterAppetizers)

app.get('/entrees', entrees.getEntrees)
app.get('/entrees/:id', entrees.getEntreesById)
app.get('/filterEntrees', entrees.filterEntrees)

app.get('/desserts', desserts.getDesserts)
app.get('/desserts/:id', desserts.getDessertsById)
app.get('/filterDesserts', desserts.filterDesserts)
// Search URL endpoint as ('/filterDesserts?minimumPrice=`param1`&maximumPrice`param2`)

app.listen(PORT, () => console.log(`Server running on ${PORT}`))
