const express = require('express');
const router = express.Router();

const checkoutController = require('../resources/app/controllers/CheckOutController.js');

router.get('/',checkoutController.index)


module.exports = router