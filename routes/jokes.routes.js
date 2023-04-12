const express = require("express")
const { buscarChistes, unChiste, crearChiste, actualizarChiste, eliminarChiste } = require("../controllers/jokes.controllers")
const Jokes = require("../models/jokes.models")
const app = express()

app.get("/api/jokes", buscarChistes)
app.get("/api/jokes/:id", unChiste)
app.post("/api/jokes", crearChiste)
app.put("/api/jokes/:id", actualizarChiste)
app.delete("/api/jokes/:id", eliminarChiste)

module.exports = app;

