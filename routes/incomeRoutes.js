const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const { createIncome, getIncomes } = require('../controllers/incomeController');


router.get('/', auth, (req, res) => {
  res.json({ message: 'Ingresos accesibles solo con token', user: req.user.id });
});

router.post('/', auth, createIncome);
router.get('/', auth, getIncomes);

module.exports = router;
