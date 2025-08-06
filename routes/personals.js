const express = require('express');
const router = express.Router();  

// Middleware para esta rota
router.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

// Define as rotas. GET, POST, PUT e DELETE
router.get('/', (req, res) => {
  res.send('Lista de Personal');
});

router.get('/:id', (req, res) => {
  res.send(`Detalhes do Personal ID: ${req.params.id}`);
});






module.exports = router;
