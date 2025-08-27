
const express = require('express');
const path = require('path');
require('dotenv').config();
const cors = require('cors')

const connectDB = require('./src/config/database');
const personalRoutes = require('./src/routes/personalRoutes');

const app = express();

// Middlewares
app.use(cors()); // Permite requisições de outras origens
app.use(express.json()); // Para parsear JSON no corpo da requisição
app.use(express.urlencoded({ extended: true })); // Para parsear dados de formulário

// Middleware para servir arquivos estáticos (as fotos)
// Agora, a URL da foto (ex: http://localhost:3333/uploads/foto-1678886400000.png) será acessível publicamente
app.use('/',express.static(path.join(__dirname, 'public', 'projeto-integrador')));
app.use('/images',express.static(path.join(__dirname, 'public', 'images')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


connectDB();

// Rotas da API
app.use('/api/personals', personalRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => { //Inicia o Server
  console.log(`Servidor rodando: http://127.0.0.1:${PORT}/`);
});

