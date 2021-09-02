const {Schema, model} = require("mongoose")
const bcrypt = require("bcryptjs")

//Esquema de datos para un usuario 
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
},{
    timestamps: true
})

userSchema.methods.encriptadorDeContraseña = async constraseña => {   //metodo para encriptar la contraseña
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(constraseña, salt)
}

userSchema.methods.compararContraseña = async function (constraseña){   //metodo para comparar la contraseña
    return await bcrypt.compare(constraseña, this.password)// Usamos this porque las funciones normales no tienen un propio contexto, por lo que tomamos el contexto del objeto que se está ejecutando

}
module.exports = model("User", userSchema)