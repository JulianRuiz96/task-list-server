const express = require("express");
const router = express.Router();

// Ruta para listar tareas completas
router.get("/completed", (req, res) => {
  // Implementa la lógica para listar tareas completas
  // Puedes usar una base de datos o un arreglo de tareas
  // y devolver las tareas completas como respuesta
  res.json({ message: "List of completed tasks" });
});

// Ruta para listar tareas incompletas
router.get("/incomplete", (req, res) => {
  // Implementa la lógica para listar tareas incompletas
  // Puedes usar una base de datos o un arreglo de tareas
  // y devolver las tareas incompletas como respuesta
  res.json({ message: "List of incomplete tasks" });
});

module.exports = router;
