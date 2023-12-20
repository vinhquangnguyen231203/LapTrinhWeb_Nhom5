const express = require('express');
const router = express.Router();

const aboutUsController = require('../resources/app/controllers/AboutUsController.js')

router.get('/',aboutUsController.index)

module.exports = router