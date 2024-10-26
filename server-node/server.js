const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3009;

// Función para cargar los archivos HTML
function serveFile(filePath, contentType, response) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      response.writeHead(500);
      response.end('Error en el servidor');
    } else {
      response.writeHead(200, { 'Content-Type': contentType });
      response.end(data);
    }
  });
}

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    serveFile(path.join(__dirname, 'views', 'index.html'), 'text/html', res);
  } else if (req.url === '/formulario') {
    serveFile(path.join(__dirname, 'views', 'formulario.html'), 'text/html', res);
  } else if (req.url === '/informacion') {
    serveFile(path.join(__dirname, 'views', 'informacion.html'), 'text/html', res);
  } else if (req.url === '/styles.css') {
    serveFile(path.join(__dirname, 'public', 'styles.css'), 'text/css', res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Página no encontrada');
  }
});

server.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
