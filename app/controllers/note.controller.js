const db = require("../models");
const Note = db.notes;
const Op = db.Sequelize.Op;

// Crear una tarea
exports.create = (req, res) => {
  // Validar request
  if (!req.body.title) {
    res.status(400).send({
      message: "¡El contenido no puede estar vacío!"
    });
    return;
  }

  // Crear tarea
  const note = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  };

  // Guardar tarea en el basa de datos
  Note.create(note)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Se produjo un error al crear la tarea."
      });
    });
};

// Recuperar todas las notas de la base de datos.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Note.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Se produjo un error al recuperar las tareas."
      });
    });
};

//Encontrar una sola tarea con un id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Note.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error al recuperar la tarea con id =" + id
      });
    });
};

// Actualizar una tarea por el id en la solicitud
exports.update = (req, res) => {
  const id = req.params.id;

  Note.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "La tarea se actualizó correctamente."
        });
      } else {
        res.send({
          message: `No se puede actualizar la tarea con id=${id}. ¡Quizás no se encontró la tarea o el cuerpo requerido está vacío!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error al actualizar la tarea con id=" + id
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  const published = req.params.published;

  Note.destroy({
    where: { id: id },
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "¡La tarea se eliminó correctamente!"
        });
      } else {
        res.send({
          message: `No se puede eliminar la tarea con id=${id}. ¡Quizás no se encontró el Tutorial!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "No se pudo eliminar la tarea con id=" + id
      });
    });
};


// Delete a Tutorial with the specified id in the request
/*exports.delete = (req, res) => {
  const id = req.params.id;
  const published = req.params.published;
  mensaje = "esta seguro?";

 if(published == 1){
  Note.destroy({
    where: { id: id },
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "¡La tarea se eliminó correctamente!"
        });
      } else {
        res.send({
          message: `No se puede eliminar la tarea con id=${id}. ¡Quizás no se encontró el Tutorial!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "No se pudo eliminar la tarea con id=" + id
      });
    });
  }else{
    Note.destroy({
      where: { id: id }, 
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "¡La tarea se eliminó correctamente!"
          });
        } else {
          res.send({
            message: `No se puede eliminar la tarea con id=${id}. ¡Quizás no se encontró la tarea!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "No se pudo eliminar la tarea con id=" + id
        });
      });
  }
};*/

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Note.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Las tareas se eliminaron con éxito!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Se produjo un error al eliminar todos las tareas."
      });
    });
};

// find all published Tutorial
exports.findAllPublished = (req, res) => {
  Note.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Se produjo un error al recuperar las tareas"
      });
    });
};