const mongoose = require('mongoose')

const dessertSchema = new mongoose.Schema({
    name: String,
    price: Number,
    vegan: Boolean,
    glutenFree: Boolean,
})

module.exports = mongoose.model('dessert', dessertSchema)