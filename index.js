const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const incomeRoutes = require('./routes/incomeRoutes');

dotenv.config();

// Manejar excepciones no capturadas y rechazos de promesas no manejados
process.on('uncaughtException', (err) => {
  console.error('❌ Uncaught Exception:', err);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('❌ Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

connectDB()
  .then(() => {
    const app = express();
    app.use(cors());
    app.use(express.json());

  
    app.use('/api/auth', authRoutes);
    app.use('/api/income', incomeRoutes);

    // Ruta pública de prueba
    app.get('/', (req, res) => {
      res.send('API Finanzas funcionando');
    });

    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => console.log(`🚀 Servidor corriendo en puerto ${PORT}`));
  })
  .catch((err) => {
    console.error('❌ Error conectando a la base de datos:', err);
    process.exit(1);
  });
