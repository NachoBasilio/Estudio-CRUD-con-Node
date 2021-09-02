const express = require('express');
const path = require('path');

//Vamos a dividir el codigo en distintas secciones

//Inicializaciones
const app = express();

//Configuraciones (Lo que quiero que haga el servidor)
app.set('port', process.env.PORT/* Hace referencia a una variable de entorno llamada "PORT" */ || 4000);

/* Node siempre busca la carpeta "view" en la carpeta raíz de nuestro proyecto,
sucede que nosotros la tenemos en la carpeta "src" por lo que tenemos que "mostrarle"
a node que está allí. Para eso vamos a usar app.set("views", path.join(__dirname, "view").
Para que todo esto tenga sentido tenemos que traer a path */
app.set('views', path.join(__dirname, 'view'));


//Middlewares (funciones que se ejecutan antes de que lleguen las rutas)

/* Tenemos que indicarle al servidor el tipo de datos que va a recibir, por ejemplo json,
nosotros vamos a usar método de express llamado "urlencoded" así siempre tomamos los datos
que nos llegan del servidor y los transformamos en un formato tipo json  */
app.use(express.urlencoded({extended: false}));


//Variables globales


//Rutas (que voy a poder hacer)
app.get("/", (req, res) => {
    res.send("Hola a la ruta principal")
}) //Esto es solo para que no nos salte un error cuando entremos desde el navegador

//Archivos estaticos (que no necesitan de una ruta)

app.use(express.static(path.join(__dirname, 'public')));//Lo mismo que con view, pero ahora para archivos estaticos




module.exports = app;