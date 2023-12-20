const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Employee = new Schema({
    id: {type: String},
    fullName: {type: String},
    DOB : {type: String},
    position : {type: String},
    gender : {type: String},
})
module.exports = mongoose.model('Employee',Employee,'DB_Employee');