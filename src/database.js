const mongoose = require('mongoose')

const MONGODB_URI = 'mongodb://localhost/node-app' /*Por ahora lo dejamos asi, pero no es la idea usar este
                                                     tipo de conexxion, porque no es seguro. Vamos a usar variables de entorno*/

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true, //Estas dos configuraciones son necesarias para el buen funcionamiento de mongoose
    useNewUrlParser: true,
})
    .then(db => console.log("DB conectada"))
    .catch(err => console.error(err))