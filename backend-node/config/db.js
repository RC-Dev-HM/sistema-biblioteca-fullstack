const mongoose = require('mongoose');

const conectarDB = async () => {
    try {
        // Intentamos conectar usando la variable de entorno que pusimos en el archivo .env
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('✅ Base de datos MongoDB conectada exitosamente');
    } catch (error) {
        console.error('❌ Error al conectar a la base de datos:', error.message);
        process.exit(1); // Detener la aplicación si la base de datos falla
    }
};

module.exports = conectarDB;