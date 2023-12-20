const express = require('express');
const router = express.Router();

const userController = require('../resources/app/controllers/UserController.js')

router.get('/',userController.index)

module.exports = router