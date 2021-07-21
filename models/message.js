//message Model
const mongoose = require('mongoose')

let message = new mongoose.Schema({
    title: { type: String },
    time: { type: Date, default: Date.now },
    description: String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user' }

})

module.exports = mongoose.model('message', user)