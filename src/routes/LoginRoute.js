const express = require('express');
const router = express.Router();

const loginController = require('../resources/app/controllers/LoginController')

router.get('/',loginController.index)

router.post('/login',loginController.login)

module.exports = router