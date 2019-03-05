const express = require('express');

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



var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});