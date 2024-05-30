const express = require('express')

const app = express();

app.get('/', (req, res) => {
    return res.json({ msg: 'Server A' })
})

app.listen(3000);