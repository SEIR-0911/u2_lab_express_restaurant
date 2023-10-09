const mongoose = require('mongoose')

const entreeSchema = new mongoose.Schema({
    name: String,
    price: Number,
    vegan: Boolean,
    glutenFree: Boolean,
})

module.exports = mongoose.model('entree', entreeSchema)