const express = require('express')
const exphbs = require("express-handlebars") 
/* Express handlebars es un modulo que nos va facilitar el hecho de manejar archivos HTML, 
    este es un motor de plantillas */
const path = require('path');

//Vamos a dividir el codigo en distintas secciones

//Inicializaciones
const app = express()
//Inicializaciones end

//Configuraciones (Lo que quiero que haga el servidor)

app.set('port', process.env.PORT/* Hace referencia a una variable de entorno llamada "PORT" */ || 4000)

/* Node siempre busca la carpeta "view" en la carpeta raíz de nuestro proyecto,
sucede que nosotros la tenemos en la carpeta "src" por lo que tenemos que "mostrarle"
a node que está allí. Para eso vamos a usar app.set("views", path.join(__dirname, "view").
Para que todo esto tenga sentido tenemos que traer a path */
app.set('views', path.join(__dirname, 'views'))

/* Express tiene un metodo para controlar motores de plantillas, 
nosotros vamos a especificar cual es el motor que queremos usar*/
app.engine('.hbs', exphbs({
    //express handlebars se separa en dos partes llamadas layouts y partials,
    //los layouts son plantillas que se usan para controlar el contenido de la pagina en bloques,
    //los partials son plantillas que se usan para reutilizar el contenido de una pagina en otra.
    //Estos archivos los vamos a crear en la carpeta view
    defaultLayout: 'main', //nombre de la plantilla que se va a usar por defecto
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs', //extension de los archivos de las plantillas
}))//Con esto configuramos el express engine, ahora tenemos que especificarle el motor de plantillas

app.set('view engine', '.hbs') //Con esto configuramos el motor de plantillas

//Configuraciones end

//Middlewares (funciones que se ejecutan antes de que lleguen las rutas)

/* Tenemos que indicarle al servidor el tipo de datos que va a recibir, por ejemplo json,
nosotros vamos a usar método de express llamado "urlencoded" así siempre tomamos los datos
que nos llegan del servidor y los transformamos en un formato tipo json  */
app.use(express.urlencoded({extended: false}))

//Middlewares end


//Variables globales


//Variables globales end


//Rutas (que voy a poder hacer)

app.get("/", (req, res) => {
    res.render('index')//Solo tenemos que espesificar el nombre de la plantilla ya que todo el resto ya lo hicimos antes
}) 

//Rutas end

//Archivos estaticos (que no necesitan de una ruta)

app.use(express.static(path.join(__dirname, 'public')))//Lo mismo que con view, pero ahora para archivos estaticos

//Archivos estaticos end


module.exports = app;