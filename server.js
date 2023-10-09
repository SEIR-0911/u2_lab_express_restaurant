const express = require('express')
const mongoose = require('mongoose')
const PORT = 3001
const app = express()


const Entree = require('./models/entree')
const Appetizer = require('./models/appetizer')
const Dessert = require('./models/dessert')



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

const Appetizer = require('../models/appetizer');

const appetizerController = {
  index: async (req, res) => {
    const appetizers = await Appetizer.find();
    res.json(appetizers);
  },
  show: async (req, res) => {
    const appetizer = await Appetizer.findById(req.params.id);
    res.json(appetizer);
  },
};

module.exports = appetizerController;


const appetizerController = require('./controllers/appetizers');

app.get('/appetizers', appetizerController.index);
app.get('/appetizers/:id', appetizerController.show);

const Appetizer = require('./models/appetizer');

// Create and save mock data
const mockAppetizers = [
  {
    name: 'Sample Appetizer 1',
    price: 9.99,
    imageUrl: 'image-url-1.jpg',
    vegan: true,
    glutenFree: false,
  },
  {
    name: 'Sample Appetizer 2',
    price: 7.99,
    imageUrl: 'image-url-2.jpg',
    vegan: false,
    glutenFree: true,
  },
  // Add more appetizers as needed
];

Appetizer.insertMany(mockAppetizers)
  .then(() => {
    console.log('Mock appetizers added to the database');
  })
  .catch((err) => {
    console.error(err);
  });