const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Login = new Schema({
    username:{type: String},
    password:{type: String}
})

module.exports = mongoose.model('Login',Login,'DB_Login');