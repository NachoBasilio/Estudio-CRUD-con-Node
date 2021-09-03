const notesCtrl = {};

//Esta funcion va a ser util para crear un formulario de creacion de notas.
notesCtrl.renderNoteForm = (req, res) => {
    res.render('notes/new-note')
}

notesCtrl.createNewNote = (req, res) => {
    console.log(req.body);
    res.send('create new note');
}

notesCtrl.renderNotes = (req, res) => {
    res.send("Render notes");
}

notesCtrl.renderEditForm = (req, res) => {
    res.send('notes/edit');
}

notesCtrl.updateNote = (req, res) => {
    res.send('update note');
}

notesCtrl.deleteNote = (req, res) => {
    res.send('delete note');
}

module.exports = notesCtrl;
