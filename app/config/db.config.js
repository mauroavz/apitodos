module.exports = {
    HOST: "us-cdbr-east-02.cleardb.com",
    USER: "b07b094143ca64",
    PASSWORD: "d7e65a0f",
    DB: "heroku_264d704429e10e4",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };

  // mysql://:d7e65a0f@us-cdbr-east-02.cleardb.com/?reconnect=true
/*
pool opcional, se utilizará para la configuración del grupo de conexiones Sequelize:

max: número máximo de conexiones en pool
min: número mínimo de conexiones en pool
idle: tiempo máximo, en milisegundos, que una conexión puede estar inactiva antes de ser liberada
acquire: tiempo máximo, en milisegundos, ese grupo intentará conectarse antes de arrojar el error
*/