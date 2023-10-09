const mongoose = require('mongoose')

const appetizerSchema = new mongoose.Schema({
    name: String,
    price: Number,
    vegan: Boolean,
    glutenFree: Boolean,
})

module.exports = mongoose.model('appetizer', appetizerSchema)