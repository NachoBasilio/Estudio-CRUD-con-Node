const usersCtrl = {}
const User = require('../models/User')//Importamos el modelo de usuarios

usersCtrl.renderSignUpForm = (req, res) => {// Esta funcion renderiza el formulario de registro
  res.render('users/signup')
}

usersCtrl.signUp = async (req, res) => {// Esta funcion crea un nuevo usuario
  const errors = []//Vamos a guardar los errores en un array para poder imprimir varios
  const { name, email, password, confirm_password } = req.body
  if(password != confirm_password){//Si las contraseñas no son iguales
    errors.push({text: 'Las contraseñas no coinciden'})
  }
  if(password.length < 4){//Si la contraseña es menor a 4 caracteres
    errors.push({text: 'La contraseña debe tener al menos 4 caracteres'})
  }
  if(errors.length > 0){//Si hay errores
    res.render('users/signup', {errors, name, email})
  }else{//Si no hay errores
    const emailUser = await User.findOne({email: email})//Comprobamos si el email ya existe
    if(emailUser){//Si el email ya existe
      req.flash("error_msg", "El correo ya esta en uso")
      res.redirect('/user/singup')
    }else{
      const newUser = new User({name, email, password})//Si no existe el email en la base de datos, creamos el usuario
      newUser.password = await newUser.encriptadorDeContraseña(password)//Encriptamos la contraseña
      await newUser.save()//Guardamos el usuario
      req.flash("success_msg", "Registro exitoso")
      res.redirect('/user/singin')
    }
  }
  
}

usersCtrl.renderSignInForm = (req, res) => {// Esta funcion renderiza el formulario de login
  res.render('users/signin');
}

usersCtrl.singIn = (req, res) => {// Esta funcion hace el login
  res.send('Login de usuario');
}

usersCtrl.logOut = (req, res) => {// Esta funcion hace el logout
  res.send('Logout de usuario');
}

module.exports = usersCtrl;