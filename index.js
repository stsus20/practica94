const express = require("express");
const app = express();
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Hola a todos, esta es mi primera aplicación con Express ");
});

const PORT = process.env.PORT;

app.listen(PORT, () => { 
    console.log(`escuchando en el puerto ${PORT}`);
})