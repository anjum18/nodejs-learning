var express = require('express');


var app = express();


app.get('/', function(req, res) {

    res.setHeader('Content-Type', 'text/html');
    res.render('mainView.ejs', {id: "test"});


    res.end();

})
.get('/add', function(req, res) {

    res.setHeader('Content-Type', 'text/html');



    res.end();

})
.get('/delete/:id', function(req, res) {

    res.setHeader('Content-Type', 'text/html');



    res.end();

})
.use(function(req, res, next){

    res.setHeader('Content-Type', 'text/plain');

    res.send(404, 'Page introuvable !');

});


app.listen(8080);
