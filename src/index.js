const app = require("./server") 

app.listen(app.get("port")/* "port" fue definidio en el archivo server.js */, () => {
    console.log("Corriendo en el puerto", app.get("port"))
})