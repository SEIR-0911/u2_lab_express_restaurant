const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 3003;
const app = express();
const Desserts = require('./controllers/Desserts');

const Appetizers = require('./controllers/Appetizers');
const Entrees = require('./controllers/Entrees');


app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send({ msg: 'Server Running' });
});

app.get('/appetizers', Appetizers.getApps);
app.get('/appetizers/:id', Appetizers.getApp);
app.get('/entrees', Entrees.getEntrees);
app.get('/entrees/:id', Entrees.getEntree);
app.get('/desserts', Desserts.getDesserts);
app.get('/desserts/:id', Desserts.getDessert);


app.listen(PORT, () => console.log(`Server running on ${PORT}`));
