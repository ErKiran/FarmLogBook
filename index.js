const express = require('express');
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.post('/test', async (req, res) => {
    console.log(req.body)
    res.json({
        msg: 'It works'
    })
})

app.get('/test', async (req, res) => {
    res.json({
        msg: 'It works'
    })
})

app.listen(4000)