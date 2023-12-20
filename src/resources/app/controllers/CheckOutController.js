const CheckOut = require('../model/Checkout')

class CheckOutController{
    index(req,res)
    {
        res.render('CheckOut')
    }
}

module.exports = new CheckOutController;