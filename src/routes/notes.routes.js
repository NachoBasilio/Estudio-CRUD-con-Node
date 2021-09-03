const { Router } = require("express");
const router = Router();
const {
  renderNoteForm,
  createNewNote,
  renderNotes,
  renderEditForm,
  updateNote,
  deleteNote,
} = require("../controllers/notes.controller");

//Vamos a definir todas las rutas que vamos a utilizar para crear las notas, en el proximo commit las vamos a desarrollar

//Nuevas notas
router.get("/notes/add", renderNoteForm); //Formulario para crear notas
router.post("/notes/new-note", createNewNote); //Crear notas

//Obtener todas las notas
router.get("/notes", renderNotes); //Lista de notas

//Update notas
router.get("/notes/edit/:id", renderEditForm); //Formulario para editar notas
router.put("/notes/edit/:id", updateNote); //Actualizar notas

//Eliminar notas
router.delete("/notes/delete/:id", deleteNote);

module.exports = router;
