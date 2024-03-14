const express = require('express');
const storeController = require('../controllers/storeController');
const router = express.Router();


router.get('/',(req,res) => {
    storeController.getProduct(req,res);
})
module.exports = router;