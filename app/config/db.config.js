module.exports = {
    HOST: "us-cdbr-east-02.cleardb.com",
    USER: "be7ba6ef04dc48",
    PASSWORD: "7fcdc365",
    DB: "heroku_772f4b737c544bc"
   // pool: {
  //    max: 5,
    //  min: 0,
      //acquire: 30000,
      //idle: 10000
   // }
  };

  //:@/?reconnect=true

/*
pool opcional, se utilizará para la configuración del grupo de conexiones Sequelize:

max: número máximo de conexiones en pool
min: número mínimo de conexiones en pool
idle: tiempo máximo, en milisegundos, que una conexión puede estar inactiva antes de ser liberada
acquire: tiempo máximo, en milisegundos, ese grupo intentará conectarse antes de arrojar el error
*/