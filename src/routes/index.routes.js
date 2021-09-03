const {Router} = require('express') //solo necesitamos el router de express
const router = Router() //creamos una instancia de router
const {renderIndex, renderAbout} = require('../controllers/index.controller') //importamos los controladores

/* Vamos a ir definiendo las distintas rutas y que funcion que creamos en los controladores queremos que ejecute */
router.get("/", renderIndex )

router.get("/about", renderAbout)

module.exports = router