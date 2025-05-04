const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
    res.send('Hello world');
})

app.get('/home', (req, res) => {
    res.send("Hi, this is a HOMEPAGE")
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})