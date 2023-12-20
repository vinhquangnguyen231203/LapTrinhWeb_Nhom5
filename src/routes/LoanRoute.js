const express = require('express');
const router = express.Router();

const loanController = require('../resources/app/controllers/LoanController')

router.get('/',loanController.index)


module.exports = router