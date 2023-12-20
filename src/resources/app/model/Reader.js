const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Reader = new Schema({
    fullName:{type: String},
    CMND:{type: String},
    category:{type: String}
})

module.exports = mongoose.model('Reader',Reader,'DB_Reader');