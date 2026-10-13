const express = require('express');
const path = require('path');
const cors = require('cors');
const datos = require('./datos.json');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/preguntas', (req, res) => {
    res.json(datos.preguntas);
});

app.get('/api/carreras', (req, res) => {
    res.json(datos.carreras);
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
