const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");


const app = express();

var corsOptions = {
  origin: "https://to-dos-tareas.herokuapp.com"
};

app.use(cors(corsOptions));

// analizar solicitudes de tipo de contenido - application/json
app.use(bodyParser.json());

// analizar solicitudes de tipo de contenido - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");

db.sequelize.sync();



// simple route
app.get("/", (req, res) => {
  res.json({ message: "Bienvenidos a la aplicacion de tareas" });
});


require("./app/routes/note.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});