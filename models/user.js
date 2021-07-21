//User Model
const mongoose = require('mongoose')

let user = new mongoose.Schema({
    name: { type: String, default: null, unique: true },
    password: { type: String },
    admin: { type: Boolean, default: false }
})

module.exports = mongoose.model('user', user)