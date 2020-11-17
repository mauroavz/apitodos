module.exports = (sequelize, Sequelize) => {
    const Note = sequelize.define("note", {
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        published: {
            type: Sequelize.BOOLEAN
        }
    });

    return Note;
};

/*
Este modelo de Sequelize representa la tabla de tutoriales
 en la base de datos MySQL. Estas columnas se generarán 
 automáticamente: id , título , descripción , publicado ,
  createdAt , updatedAt .
*/