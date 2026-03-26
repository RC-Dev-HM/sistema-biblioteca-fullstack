const express = require('express');
const cors = require('cors');
require('dotenv').config();
const conectarDB = require('./config/db');

const app = express();

conectarDB();

app.use(cors()); 
app.use(express.json()); 

app.use('/api/libros', require('./routes/libroRoutes'));

app.get('/', (req, res) => {
    res.send('¡Hola! El servidor de la Biblioteca Digital está funcionando.');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo exitosamente en http://localhost:${PORT}`);
});