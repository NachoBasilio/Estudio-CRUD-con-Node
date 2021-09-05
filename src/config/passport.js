//Con passport vamos a configurar nuestra aplicación para que utilice la autenticación de usuarios
const passport = require('passport');
const LocalStrategy = require("passport-local").Strategy//Strategy es una clase que nos permite crear una estrategia de autenticación
const User = require('../models/User');

passport.use(new LocalStrategy({//Nos permite crear una estrategia de autenticación
    usernameField: 'email',
    passwordField: 'password'
}, async (email, password, done)=>{
    //Si existe el usuario en nuestra base de datos
    const user = await User.findOne({email})
    if(!user){
        return done(null, false, {message: "Usuario no encontrado"})
    } else {
        //Si el usuario existe, vamos a comprobar la contraseña
        const match =  await user.compararContraseña(password)
        if(match){
            return done(null, user)
        }else{
            return done(null, false, {message: "Contraseña incorrecta"})//message es un mensaje que se va a mostrar en el front, para mostrarlo con handlebars se usa "error" ya que passport lo va a entender así
        }
    }
}))


passport.serializeUser((user, done)=>{
    done(null, user.id)
})

passport.deserializeUser((id, done)=>{
    User.findById(id, (err, user)=>{
        done(err, user)
    })
})