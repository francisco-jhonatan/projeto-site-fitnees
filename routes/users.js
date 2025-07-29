const express = require('express');
const router = express.Router();

// GET todos os usuários
router.get('/', (req, res) => {
  res.send('List of users');
});

// GET usuário por id
router.get('/:id', (req, res) => {
  res.send(`Usuário com ID ${req.params.id}`);
});

// POST novo usuário
router.post('/', (req, res) => {
  res.send('Cadastrar um usuário');
});

module.exports = router;