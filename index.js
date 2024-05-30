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

app.get('/categories', (req, res) => {
    res.send(categories)
})

app.get('/categories/:id', (req, res) => {
    const id = req.params.id;
    const categoryData = courses.filter(c => c.category_id == id)
    res.send(categoryData)
})

app.get('/courses', (req, res) => {
    res.send(courses)
})

app.get('/course-details/:id', (req, res) => {
    const id = req.params.id;
    const singleCourse = courses.find(course => course.id == id)
    res.send(singleCourse)
})

app.listen(port, () => {
    console.log('example app listening')
})