const Calculator = require('libraries/Calcaulator');
let MyCalc = new Calculator()

const addNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = number1 + number2
    console.log(sum)
    res.status(200)
    res.json({result:sum})
}

const subtractNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let difference = number1 - number2
    console.log(difference)
    res.status(200)
    res.json({result:difference})
}

const multiplyNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let fraction = number1 / number2
    console.log(fraction)
    res.status(200)
    res.json({result:fraction})
}

const divideNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let product = number1 * number2
    console.log(product)
    res.status(200)
    res.json({result:product})
}

module.exports = {
    addNumbers, multiplyNumbers, subtractNumbers, divideNumbers
}