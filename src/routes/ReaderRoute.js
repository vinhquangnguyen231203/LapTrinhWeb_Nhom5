const express = require('express');
const router = express.Router();

const readerController = require('../resources/app/controllers/ReaderController')

router.get('/',readerController.LoadReader)

router.post('/:creatReader',readerController.CreatReader)

router.put('/:updateReader/edit',readerController.UpdateReader)

router.delete('/:deleteReader/delete/id',readerController.DeleteReader)
module.exports = router