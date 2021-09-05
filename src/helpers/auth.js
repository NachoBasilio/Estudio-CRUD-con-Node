const helpers = {}

helpers.isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {//isAuthenticated() es un metodo de passport
        return next()
    }
    req.flash("error_msg", "No estas autenticado")
    res.redirect('/user/singin')
    
}

module.exports = helpers