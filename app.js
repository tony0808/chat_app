
const express = require('express');

// express app
const app = express();
const port = 3000;

// register view engine
app.set('view engine', 'ejs');

// listen for requests
app.listen(port);

app.get('/', function(req, res) {
    res.render('index',{title:'homepage'});

});
app.get('/about', function(req, res) {
    res.render('about' , {title: 'about'});
    
});
app.get('/log_in', function(req, res) {
    res.render('log_in', {title: 'sign in'});
    
});
app.get('/sign_up', function(req, res) {
    res.render('sign_up', {title: 'sign up'});
    
});

app.use((req, res) => {
    res.status(404).redirect('error', {title: 'Error 404'});
})


