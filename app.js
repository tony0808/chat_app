const express = require('express');

// express app
const app = express();
const port = 3000;

// register view engine
app.set('view engine', 'ejs');

// listen for requests
app.listen(port);

app.get('/', function(req, res) {
    res.render('index', {title:'homepage'});
});

app.get('/about', function(req, res) {
    res.render('about', {title:'About'});
});

app.get('/log-in', function(req, res) {
    res.render('log_in', {title:'Log In'});
});

app.get('/log-out', function(req, res) {
    res.render('log_out', {title:'Log Out'});
});

app.get('/sign-up', function(req, res) {
    res.render('sign_up', {title:'Sign Up'});
});