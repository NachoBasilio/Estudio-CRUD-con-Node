require("dotenv").config()
/* Vamos usar esta dependencia o modulo para crear variables de entorno desde lo que dejemos en el 
archivo ".env" que esta en la raiz*/

const app = require("./server")
require("./database")//Con esto podemos arrancar la base de datos

app.listen(app.get("port")/* "port" fue definidio en el archivo server.js */, () => {
    console.log("Corriendo en el puerto", app.get("port"))
})