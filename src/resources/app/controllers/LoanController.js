const Loan = require('../model/Loan')

class LoanController{
    index(req,res)
    {
        res.render('Loan')
    }
    
}

module.exports = new LoanController;