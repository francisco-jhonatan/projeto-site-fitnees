const express = require('express');
const router = express.Router();  

// Middleware para esta rota
router.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

// Define as rotas. GET, POST, PUT e DELETE
router.get('/', (req, res) => {
  res.send('List of users');
});

router.get('/:id', (req, res) => {
  res.send(`Details for user with ID: ${req.params.id}`);
});

router.post('/', (req, res) => {
  res.send('Create a new user');
});

router.put('/', (req, res)=>{
  res.send('Put method');
})

router.delete('/:id', (req, res)=>{
  res.send('Delete method');
})

module.exports = router;