const Employee = require('../model/Employee')

class EmployeeController{
    index(req,res)
    {
        res.render('Employee')
    }
    
}

module.exports = new EmployeeController;