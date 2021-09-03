const mongoose = require('mongoose')

// const {NOTES_APP_MONGODB_HOST, NOTES_APP_MONGODB_DATABASE} = process.env /*VARIABLES DE ENTORNO!*/
// const MONGODB_URI = `mongodb://${NOTES_APP_MONGODB_HOST}/${NOTES_APP_MONGODB_DATABASE}`
const MONGODB_URI = "mongodb://127.0.0.1:27017/note-app"

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true, //Estas dos configuraciones son necesarias para el buen funcionamiento de mongoose
    useNewUrlParser: true,
})
    .then(db => console.log("DB conectada"))
    .catch(err => console.error(err))