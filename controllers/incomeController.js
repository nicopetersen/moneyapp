const Income = require('../models/Income');

const createIncome = async (req, res) => {
  try {
    const { monto, fuente, moneda } = req.body;
    console.log('🔐 Usuario:', req.user, '| Datos recibidos:', req.body);

    const nuevoIngreso = new Income({
      user: req.user.id, 
      monto,
      fuente,
      moneda,
    });

    await nuevoIngreso.save();
    res.status(201).json(nuevoIngreso);
  } catch (error) {
    console.error('❌ Error al crear ingreso:', error);
    res.status(500).json({ message: 'Error al crear ingreso' });
  }
};



const getIncomes = async (req, res) => {
    try {
        const incomes = await Income.find({ user: req.user.id }).sort({ date: -1 });
        res.json(incomes);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener ingresos' });
    }
};

module.exports = { createIncome, getIncomes };
