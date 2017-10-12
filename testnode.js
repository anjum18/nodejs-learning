var http = require('http');

var url = require('url');


var server = http.createServer(function(req, res) {

    var page = url.parse(req.url).pathname;

    console.log(page);

    res.writeHead(200, {"Content-Type": "text/plain"});

    if (page == '/') {

        res.write('Vous êtes à l\'accueil, que puis-je pour vous ?');

    }

    else if (page == '/sous-sol') {

        res.write('Vous êtes dans la cave à vins, ces bouteilles sont à moi !');

    }

    else if (page == '/etage/1/chambre') {

        res.write('Hé ho, c\'est privé ici !');

    }
    else {
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.write('404');
    }

    jeu.emit('gameover','test');

    var monmodule = require('monmodule');

    monmodule.helloWorld(true);
    monmodule.helloWorld(false);


    res.end();

});

var EventEmitter = require('events').EventEmitter;


var jeu = new EventEmitter();


jeu.on('gameover', function(message){

    console.log(message);

});

server.on('close',function(){
  console.log('closing');
})



server.listen(3000);
