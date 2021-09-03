const {Schema, model} = require("mongoose")

const NoteSchema = new Schema({ //Esquema de como se van a guardar los datos en la base de datos
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
}, {
    timestamps: true // agrega "createdAt" y "updatedAt" a los documentos (Cuando fue creado y cuando fue actualizado)
})

module.exports = model("Note", NoteSchema) //Crea el modelo de la base de datos