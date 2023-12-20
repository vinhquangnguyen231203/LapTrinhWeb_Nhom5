const User = require('../model/User')

class UserController{
    index(req,res)
    {
        res.render('User')
    }
    
}

module.exports = new UserController;