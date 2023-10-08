//1
const express = require('express')

//10 setup a require for our controller files
const appsController = require('./controllers/Appetizers.js')
const entController = require('./controllers/Entrees.js')
const dessController = require('./controllers/Desserts.js')

//3
const cors = require('cors')

//1
const PORT = process.env.PORT || 3001

//1
const app = express()

//3 
app.use(cors())
app.use(express.json())
app.use(express.urlencoded( {extended: true}))

//4 Create Routes
app.get('/', (req, res) => {
    res.send({ msg: 'Server Running'})
})

//5 run npm run dev
//6 check http://localhost:3001 for console.log in app.listen
//7 create directory for controllers and create appropriate .js inside of directory.
// -> go to Appetizers.js

//11 creating a GET route with endpoints and use the controllers
app.get('/appetizers', appsController.getApps)
app.get('/appetizers/:id', appsController.getApp)

app.get('/entrees', entController.getEnts)
app.get('/entrees/:id', entController.getEnt)

app.get('/desserts', dessController.getDesserts)
app.get('/desserts/:id', dessController.getDessert)

// -> create arrays in controllers



//1
app.listen(PORT, () => console.log(`Server is running on ${PORT}`))

//2 check package.json for dependencies:
    // "scripts": {
    // "test": "echo \"Error: no test specified\" && exit 1",
    // "start": "node app.js",
    // "dev": "nodemon app.js""
    // }