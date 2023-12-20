const express = require('express');
const router = express.Router();

const employeeController = require('../resources/app/controllers/EmployeeController.js')

router.get('/',employeeController.index)


module.exports = router