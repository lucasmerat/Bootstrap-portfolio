const express = require('express');

process.env.PORT = 3000;

const app = express();

app.set('view engine', 'ejs');

app.use('/assets', express.static('assets'));

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



app.listen(process.env.PORT, '0.0.0.0', function(err) {
    console.log("Started listening on %s", app.url);
  });