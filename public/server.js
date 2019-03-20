const express = require('express');
const path = require('path')

let PORT = 80;

const app = express();

app.set('view engine', 'ejs');

// Static file setup

app.use('/assets', express.static('assets'));

app.use('/MultiplayerRPS', express.static('multiplayerRPS'));

app.use('/GiphyShare', express.static('GiphyShare'));

app.use('/SuperSmashRPG', express.static('SuperSmashRPG'));

app.use('/Word-Guess-Game', express.static('Word-Guess-Game'));

app.use('/TriviaGame', express.static('TriviaGame'));

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