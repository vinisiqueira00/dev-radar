const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors')

mongoose.connect('mongodb+srv://root:root@cluster0-gh3cp.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333)
