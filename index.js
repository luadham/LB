const express = require('express')

const app = express();

app.get('/', (req, res) => {
    return res.json({ msg: 'Welcome Automation' })
});


app.get('/health', (req, res) => {
    return res.json({ msg: 'Running' })
});

app.listen(8080);