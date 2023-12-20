const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    id: {type: String},
    fullName: {type: String},
    DOB: {type: String},
    gender: {type: String},
    position: {type: String},
})
module.exports = mongoose.model('User',User,'DB_User');