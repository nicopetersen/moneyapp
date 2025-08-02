const mongoose = require('mongoose');

const incomeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  monto: {
    type: Number,
    required: true,
  },
  fuente: {
    type: String,
    required: true,
    trim: true,
    enum: ['Sueldo', 'Transferencia', 'Venta'],
    default: 'Sueldo', // Valor por defecto

  },
  fecha: {
    type: Date,
    default: Date.now,
  },
  moneda: {
    type: String,
    required: true,
    enum: ['USD', 'EUR', 'GBP', 'ARS'], // Puedes agregar más
    default: 'ARS', // Valor por defecto
  },
});

module.exports = mongoose.model('Income', incomeSchema);
