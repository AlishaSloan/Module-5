const express = require('express')
const app = express()
const port = 3000
const portTwo = 4000

app.get('/', (req, res) => {
    res.send('Hello Friends!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

app.listen(portTwo, () => {
    console.log(`Example app listening at http://localhost:${portTwo}`)
})