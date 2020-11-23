module.exports = app => {
    const notes = require("../controllers/note.controller.js");
  
    var router = require("express").Router();
  
    // Crear una nueva tarea
    router.post("/", notes.create);
  
    // Recuperar todas las tareas
    router.get("/", notes.findAll);
  
    // Recuperar todas las tareas pendientes
    router.get("/published", notes.findAllPublished);
  
    // Recuperar una sola tarea con id
    router.get("/:id", notes.findOne);
  
    // Subir tarea con id
    router.put("/:id", notes.update);
  
    // Eliminar tarea con id
    router.delete("/:id", notes.delete);
  
    // eliminar todos los tutoriales
    router.delete("/", notes.deleteAll);
  
    app.use('/api/notes', router);
  };