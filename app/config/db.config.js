module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "root",
    DB: "tareas",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };

/*
pool opcional, se utilizará para la configuración del grupo de conexiones Sequelize:

max: número máximo de conexiones en pool
min: número mínimo de conexiones en pool
idle: tiempo máximo, en milisegundos, que una conexión puede estar inactiva antes de ser liberada
acquire: tiempo máximo, en milisegundos, ese grupo intentará conectarse antes de arrojar el error
*/