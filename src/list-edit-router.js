const express = require("express");
const router = express.Router();

// Ruta para crear una nueva tarea
router.post("/create", (req, res) => {
  // Implementa la lógica para crear una nueva tarea
  // Puedes recibir los datos de la tarea desde el cuerpo de la solicitud (req.body)
  // y guardar la nueva tarea en una base de datos o arreglo de tareas
  res.json({ message: "Task created successfully" });
});

// Ruta para eliminar una tarea
router.delete("/delete/:taskId", (req, res) => {
  const taskId = req.params.taskId;
  // Implementa la lógica para eliminar la tarea con el ID proporcionado
  // Puedes buscar la tarea en una base de datos o arreglo de tareas
  // y eliminarla
  res.json({ message: `Task ${taskId} deleted successfully` });
});

// Ruta para actualizar una tarea
router.put("/update/:taskId", (req, res) => {
  const taskId = req.params.taskId;
  // Implementa la lógica para actualizar la tarea con el ID proporcionado
  // Puedes recibir los datos actualizados desde el cuerpo de la solicitud (req.body)
  // y actualizar la tarea en una base de datos o arreglo de tareas
  res.json({ message: `Task ${taskId} updated successfully` });
});

module.exports = router;
