const express = require('express');
const router = express.Router();
const personalController = require('../controllers/personalController');
const upload = require('../middleware/upload');

//http://localhost:3333/api/personals?param=0
// Rota POST para criar um novo personal.
// O 'upload.single('foto')' é o middleware que processa o upload do arquivo com o campo 'foto'.
router.post('/', upload.single('foto'), personalController.createPersonal);

// Rota GET para buscar personais pelo nome
// Deve vir antes da rota /:id ou rotas com parâmetros para evitar conflitos
router.get('/search', personalController.searchPersonalByName);//http://localhost:3333/api/personals/search?nome=Carlos

// Rota GET para listar personais com paginação
// Ex: /personals?param=0 para a primeira página, /personals?param=1 para a segunda, etc.
router.get('/', personalController.getPaginatedPersonals);//http://localhost:3333/api/personals?param=0


module.exports = router;