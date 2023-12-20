const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Book = new Schema({
    bookName: {type: String},
    category: {type:String},
    author: {type: String},
    quantity: {type: String},
})
module.exports = mongoose.model('Book',Book,'Book');