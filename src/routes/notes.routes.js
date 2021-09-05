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
//Para validar que cada usuario tenga acceso a las rutas vamos a usar una funcion que va a tener un papel intermedio entre la ruta y el controlador. Para esto vamos a usar un helper.
const {isAuthenticated} = require("../helpers/auth");//Importamos el helper


//Vamos a definir todas las rutas que vamos a utilizar para crear las notas, en el proximo commit las vamos a desarrollar

//Nuevas notas
router.get("/notes/add", isAuthenticated ,renderNoteForm); //Formulario para crear notas
router.post("/notes/new-note", isAuthenticated ,createNewNote); //Crear notas

//Obtener todas las notas
router.get("/notes", isAuthenticated ,renderNotes); //Lista de notas

//Update notas
router.get("/notes/edit/:id", isAuthenticated ,renderEditForm); //Formulario para editar notas
router.put("/notes/edit/:id", isAuthenticated ,updateNote); //Actualizar notas

//Eliminar notas
router.delete("/notes/delete/:id", isAuthenticated ,deleteNote);

module.exports = router;
