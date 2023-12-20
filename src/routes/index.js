const loginRoute = require('./LoginRoute')
const bookRoute = require('./BookRoute')
const aboutUsRoute = require('./AboutUsRoute')
const readerRoute = require('./ReaderRoute')
const userRoute = require('./UserRoute')
const loanRoute = require('./LoanRoute')
const employeeRoute = require('./EmployeeRoute')
const checkoutRoute = require('./CheckOutRoute')

function route(app)
{  
    app.use('/book',bookRoute)
    app.use('/',loginRoute)
    app.use('/aboutUs',aboutUsRoute)
    app.use('/reader',readerRoute)
    app.use('/user',userRoute)
    app.use('/loan',loanRoute)
    app.use('/employee',employeeRoute)
    app.use('/checkout',checkoutRoute)
}

module.exports = route;
