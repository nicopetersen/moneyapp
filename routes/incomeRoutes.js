const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const { createIncome, getIncomes } = require('../controllers/incomeController');


router.post('/', auth, createIncome);
router.get('/', auth, getIncomes);

module.exports = router;
