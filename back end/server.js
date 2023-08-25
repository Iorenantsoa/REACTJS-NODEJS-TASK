const express = require('express')
const mongoose = require('mongoose')
const morgan = require ('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const cors = require('cors')
const router = require('./Routes/TaskRouter')
require('dotenv').config()

const PORT = process.env.PORT || 5000

const app = express()
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser())
app.use(cors())
app.use(express.json())
app.use(bodyParser.json());


mongoose.connect("mongodb://localhost:27017/task_crud" ,{useNewUrlParser : true, useUnifiedTopology : true})
const db = mongoose.connection
db.on('error', (err)=>{
    console.error(err)
})
db.once('open',()=>{
    console.log('database connection successfully')
})

app.use(router)
app.listen(PORT , ()=>{
    console.log('Listening on port '+PORT)
})










