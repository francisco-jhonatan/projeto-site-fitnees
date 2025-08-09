const express = require('express');
const personalsRoutes = require('./routes/personals'); // Importa a rota
const app = express();
const port = 3000;
const cors = require('cors')// acess-control-allow-origin

app.use(cors())

app.use(express.json())

// Monta a rota '/users' 
app.use('/personals', personalsRoutes);

// Rota do home
app.get('/', (req, res) => {
  res.send('Welgcfc to the homepage!');
});

// Server rodando
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});