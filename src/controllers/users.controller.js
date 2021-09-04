const usersCtrl = {};

usersCtrl.renderSignUpForm = (req, res) => {// Esta funcion renderiza el formulario de registro
  res.render('users/signup');
}

usersCtrl.signUp = (req, res) => {// Esta funcion crea un nuevo usuario
  res.send('Registro de usuario');
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