const express = require('express');
const app = express();
const PORT = 3000

const usersRouter = require('./routes/users')

app.use( '/users',usersRouter)
app.use( '/users/:id', usersRouter)
app.use( '/new', usersRouter)

// Rota básica
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Inicia o server server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});