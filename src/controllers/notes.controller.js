const notesCtrl = {};

const Note = require('../models/Note');//Aca tenemos el modelo de la nota que vamos a crear con los datos que nos llega del formulario.


//Esta funcion va a ser util para crear un formulario de creacion de notas.
notesCtrl.renderNoteForm = (req, res) => {
    res.render('notes/new-note')
}

//En esta funcion vamos a determinar que vamos a hacer con la informacion que nos llega del formulario de creacion de notas.
notesCtrl.createNewNote = async (req, res) => {
    const {title, description} = req.body //Esta forma de desestructurar los datos que nos llegan desde el formulario es la mas facil de entender que llenar todo de puntos.

    const newNote = new Note({title, description}) //Instanciamos una nueva nota con los datos que nos llegaron del formulario.

    await newNote.save() //Guardamos la nota en la base de datos.
    res.redirect('/notes');
}

//En esta funcion vamos a renderizar las notas, aqui terminaremos cuando creemos una nota nueva tambien.
notesCtrl.renderNotes = async (req, res) => {
    const notes = await Note.find().lean(); //Aca vamos a buscar todas las notas que tenemos en la base de datos. La funcion lean() nos va a devolver una lista de notas sin el objeto de mongoose, lo pasa a una lista de objetos JSON.
    res.render('notes/all-notes', {notes})
}

notesCtrl.renderEditForm = (req, res) => {
    res.send('notes/edit');
}

notesCtrl.updateNote = (req, res) => {
    res.send('update note');
}

notesCtrl.deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.redirect('/notes');
}

module.exports = notesCtrl;
