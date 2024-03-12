const express = require('express');
const calculatorController = required('../controllers/calcualtorController')
const router = express.Router();

router.get('/add', (req, res) => {
    calculatorController.addNumbers(req, res);
})

router.get('/subtract', (req, res) => {
    calculatorController.subtractNumbers(req, res);
})

router.get('/divide', (req, res) => {
    calculatorController.divideNumbers(req, res);
})

router.get('/multiply', (req, res) => {
    calculatorController.multiply.numbers(req, res);
})

module.exports =router;