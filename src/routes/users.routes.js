//En este archivo se definen las rutas de los usuarios
const { Router } = require('express');
const router = Router();
const {renderSignUpForm, signUp, renderSignInForm, singIn, logOut} = require('../controllers/users.controller');

//Ruta para renderizar el formulario de registro
router.get('/user/singup', renderSignUpForm);
//Ruta para registrar un usuario
router.post('/user/singup', signUp);
//Ruta para renderizar el formulario de login
router.get('/user/singin', renderSignInForm);
//Ruta para loguear un usuario
router.post('/user/singin', singIn);

//Ruta para cerrar sesion
router.get('/user/logout', logOut);

module.exports = router;