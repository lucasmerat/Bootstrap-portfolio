const express = require('express');
const path = require('path')

let PORT = 80;

const app = express();

app.set('view engine', 'ejs');

// Static file setup

app.use(express.static(path.join(__dirname, 'public')));

//EJS Template rendering

app.get('/', function(req,res){
    res.render('index')
});

app.get('/contact', function(req,res){
    res.render('contact')
});

app.get('/resume', function(req,res){
    res.render('resume')
});

app.get('/portfolio', function(req,res){
    res.render('portfolio')
});

app.listen(PORT, function(err) {
    console.log("Started listening on %s", PORT);
  });