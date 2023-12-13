const express = require('express')
const port = 3000
const app = express()
app.get('/',(req, res) => {
    res.send('Hello World');
})


app.post('/backend-api/conversation', (req, res) => {
    console.log("Example code lisetning on port", port);
})

app.listen(port);