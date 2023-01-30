const express = require('express');

// express app
const app = express();
const port = 3000;

// register view engine
app.set('view engine', 'ejs');

// listen for requests
app.listen(port);

app.get('/', function(req, res) {
    res.render('index');
});