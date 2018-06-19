const http = require('http');


http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'Cristhiam',
            apellido: 'Vasquez',
            edad: '27',
            url: req.url
        }

        res.write(JSON.stringify(salida));
        //res.write('Hola Mundo');
        res.end();

    })
    .listen(3300);

console.log('escuchando el puerto 3300');