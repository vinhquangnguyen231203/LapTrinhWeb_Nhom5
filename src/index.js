//import
const express = require('express')
const morgan = require('morgan')
const path = require('path')
const handlebars = require('express-handlebars')
const app = express()
const port = 3000
const fs = require('fs');
const route = require('./routes')
const db = require('./config/db')
const methodOverride = require('method-override')

//Connect to DB
db.connect();

//HTTP log
app.use(morgan('combined'))
app.use(express.static(path.join(__dirname,'public')))

//Use JSON
app.use(express.urlencoded({
  extended: true
  
}));
app.use(express.json());

//Method Override
app.use(methodOverride('_method'))

//Templat Engine - handlebars
app.engine('hbs',handlebars.engine({
    extname: '.hbs',
    helpers: {
        sum: (a,b) => a+b
    }
}))
app.set('view engine','hbs');
app.set('views',path.join(__dirname,'resources','views'))

//Router
route(app);


//Listen
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})