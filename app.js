const express = require('express');
const userRoutes = require('./routes/users'); // Importa a rota
const app = express();
const port = 3000;

// Monta a rota '/users' 
app.use('/users', userRoutes);

// Rota do home
app.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});

// Server rodando
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});