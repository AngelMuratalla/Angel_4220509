const http = require('http');


const server = http.createServer((req, res) => {
    res.statusCode = 200; 
    res.setHeader('Content-Type', 'text/plain'); 
    res.end('Bienvenido al Servidor!'); 
});

const port = 3000;
const hostname = '127.0.0.1';

server.listen(port, hostname, () => {
    console.log(`Servidor corriendo en http://${hostname}:${port}`);
});
