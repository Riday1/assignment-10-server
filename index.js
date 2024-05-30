const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors')



app.use(cors())
const courses = require('./data/courses-data.json')
const categories = require('./data/categories.json')

app.get('/', (req, res) => {
    console.log('hello world')
})

app.listen(port, () => {
    console.log('example app listening')
})