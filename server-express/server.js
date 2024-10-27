const express = require('express');
const path = require('path');
const app = express();
const PORT = 3009;

// Servir archivos estáticos (como CSS) desde la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para la página de inicio
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Ruta para la página del formulario
app.get('/calculator', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'calculator.html'));
});

// Ruta para la página de información
app.get('/QR', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'QRgenerator.html'));
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
