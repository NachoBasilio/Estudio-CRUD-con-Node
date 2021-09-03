//Estos son los controladores que se exportan, lo hacemos asi para poder tener mas libertad para expandirlos y modificarlos cuanto querramos.
const indexCtrl = {}//Esto es un objeto vacio, al que le vamos a ir agregando funciones a ejecutar cuando se llame a cada ruta.

indexCtrl.renderIndex = (req, res) => {
    res.render("index")
}

indexCtrl.renderAbout = (req, res) => {
    res.render("about")
}

module.exports = indexCtrl