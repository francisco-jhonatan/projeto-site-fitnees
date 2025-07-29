const express = require('express');
const router = express.Router();

// GET todos os usuários
router.get('/users', (req, res) => {
  res.send('List of users');
});

// GET usuário por id
router.get('/users/:id', (req, res) => {
  res.send(`Usuário com ID ${req.params.id}`);
});

// POST novo usuário
router.post('/new', (req, res) => {
  res.send('Cadastrar um usuário');
});

module.exports = router;