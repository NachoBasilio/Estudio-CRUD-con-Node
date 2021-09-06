const notesCtrl = {};

const Note = require('../models/Note');//Aca tenemos el modelo de la nota que vamos a crear con los datos que nos llega del formulario.


//Esta funcion va a ser util para crear un formulario de creacion de notas.
notesCtrl.renderNoteForm = (req, res) => {
    res.render('notes/new-note')
}

//En esta funcion vamos a determinar que vamos a hacer con la informacion que nos llega del formulario de creacion de notas.
notesCtrl.createNewNote = async (req, res) => {
    const {title, description} = req.body //Esta forma de desestructurar los datos que nos llegan desde el formulario es la mas facil de entender que llenar todo de puntos.

    const newNote = new Note({title, description, user: req.user.id}) //Instanciamos una nueva nota con los datos que nos llegaron del formulario.

    await newNote.save() //Guardamos la nota en la base de datos.

    req.flash('success_msg', 'Nota agragada de manera correcta')//Aca vamos a mandar un mensaje de exito.
    res.redirect('/notes');
}

//En esta funcion vamos a renderizar las notas, aqui terminaremos cuando creemos una nota nueva tambien.
notesCtrl.renderNotes = async (req, res) => {
    const notes = await Note.find({user: req.user.id}).lean() //Aca vamos a buscar todas las notas que tenemos en la base de datos. La funcion lean() nos va a devolver una lista de notas sin el objeto de mongoose, lo pasa a una lista de objetos JSON.
    res.render('notes/all-notes', {notes})
}

//En esta funcion vamos a renderizar la pagina de editar notas en funcione del id que le mandamos.
notesCtrl.renderEditForm = async (req, res) => {
    const note = await Note.findById(req.params.id).lean()
    if(note.user != req.user.id){//Aca vamos a verificar que la nota que queremos editar sea de la misma persona que esta logueada.
        req.flash('error_msg', 'No tienes permisos para editar esta nota')
        return res.redirect('/notes')
    }

    res.render('notes/edit-note', {note});
}

//Aqui, en esta funcion, vamos a proceder a actualizar los valores dentro de la base de datos.
notesCtrl.updateNote = async (req, res) => {
    // const {title, description} = req.body
    // const note = await Note.findById(req.params.id)
    // note.title = title
    // note.description = description
    // await note.save()
    const {title, description} = req.body
    await Note.findByIdAndUpdate(req.params.id, {title, description})
    req.flash('success_msg', 'Nota actualizada de manera correcta')//Usamos el mismo nombre para definir distintos mensajes en una misma "categoria".
    res.redirect('/notes');
}

notesCtrl.deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Nota eliminada de manera correcta')//Todos estos mensajes luego pueden ser trabajados al mismo tiempo, vamos a hacer que se vean en verde, por ejemplo.
    res.redirect('/notes');
}

module.exports = notesCtrl;
