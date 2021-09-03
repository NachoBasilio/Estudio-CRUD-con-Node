const notesCtrl = {};

notesCtrl.renderNoteForm = (req, res) => {
    res.send('notes/add');
}

notesCtrl.createNewNote = (req, res) => {
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
