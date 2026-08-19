const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware - "intermediarios" que procesan las peticiones
app.use(cors());  // Permite peticiones de otros dominios
app.use(express.json());  // Parsea JSON automáticamente
app.use(express.static('public'));  // Sirve archivos estáticos

// Ruta principal - sirve el index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});