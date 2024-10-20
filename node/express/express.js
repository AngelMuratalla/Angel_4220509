const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Bienvenido al servidor EXPRESS!');
});

const port = 3000;
const hostname = '127.0.0.1';

app.listen(port, hostname, () => {
    console.log(`Servidor corriendo en http://${hostname}:${port}`);
});
