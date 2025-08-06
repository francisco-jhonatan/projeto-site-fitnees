 const express = require('express')
 const router = express.Router();
 
router.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

router.get('/', (req, res) => {
    res.send('Lista de Personal Trainers')
})
 
router.get('/:id',(req, res) => {
    res.send(`Detalhes do Personal: ${req.params.id}`);
});