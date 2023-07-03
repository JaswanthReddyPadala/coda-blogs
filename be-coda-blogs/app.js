// Setup
var express = require('express');
var cors = require('cors');

var app = express();
app.use(cors());

const startAppResponse = {
    title: "You have been hit!"
}

app.get("/", (req, res) => {
    res.send(startAppResponse);
})

// Listen
app.listen(3000, () => {
    console.log('Server listing on 3000');
})