const Login = require('../model/Login')

class LoginController{
    index(req,res)
    {
        res.render('Login')
    }
    login(req,res,next)
    {
        const username = req.body.username;
        const password = req.body.password;

        Login.findOne({
            username: username,
            password: password
        })
        .then(data =>{
            if(data)
            {
                res.redirect('/aboutUs')
            }
            else
            {
                res.status(300).json('Sai tài khoản hoặc mật khẩu')
            }
        })
        .catch(next)
    }
}

module.exports = new LoginController;