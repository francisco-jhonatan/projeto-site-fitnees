const express = require('express');
const router = express.Router();  

// Middleware para esta rota
router.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

// Define as rotas. GET, POST, PUT e DELETE
router.get('/', (req, res) => {
  res.send('Listra de personal');
});  

router.get('/:id', (req, res) => {
  res.send(`Detalhes do personal ID: ${req.params.id}`);
}); 

router.post('/', (req, res) => {
  console.log(req.body)
  res.send(`id ${req.body.username} 
    listra do personal ${req.body.password}`);
});

module.exports = router;