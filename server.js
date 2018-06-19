var express = require('express');
var app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//EXPRESS HBS ENGINE -- RENDERIZAR PAGINAS WEB
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'crisTHiam'
    });


});

app.get('/about', (req, res) => {

    res.render('about');


});

app.listen(port, () => {

    console.log(`Escuchando peticiones del puerto ${port}`);

});