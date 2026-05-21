const express = require("express");
const app = express();
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Hola Mundo :v");
});

const PORT = process.env.PORT;

app.listen(PORT, () => { 
    console.log(`escuchando en el puerto ${PORT}`);
})