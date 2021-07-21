const express = require('express')
const app = express()

const mongoose = require('mongoose')

const indexRoute = require('./routes/indexRoute')

//database 
let MONGODB = 'mongodb://127.0.0.1:27017/members'
mongoose.connect(MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})


//
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//setting views
app.set('view engine', 'pug')
app.set('views', __dirname + '/views')

//routes
app.use('/', indexRoute)


//Listning 
const port = 3000
app.listen(port, () => {
    console.log(`Listning on port : ${port}`);
})