const express = require('express');
const router = express.Router();

const bookController = require('../resources/app/controllers/BookController.js')

router.get('/',bookController.LoadBook)

router.post('/:creatBook',bookController.CreatBook)

router.put('/:updateBook/edit',bookController.UpdateBook)

router.delete('/deleteBook/delete/:id',bookController.DeleteBook)
module.exports = router