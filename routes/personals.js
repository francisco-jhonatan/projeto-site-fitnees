
var personals = [
  {
    'id': 0,
    'nome': 'Zidane',
    'genero': 'Masculino',
    'formacao': ['Crossfit'],
    'experiencia': ['Crosfit'],
    'horario': 'manhã, tarde e noite',
    'atendimento': 'Academia',
    'image': 'https://fly.metroimg.com/upload/q_85,w_700/https://uploads.metroimg.com/wp-content/uploads/2024/09/09122937/Zinedine-Zidane-1.jpg',
    'contato': {
      'telefone': '999999999',
      'email': 'zidane@mail.com',
      'instagram': 'instagram.com'
    }
  }, {
    'id': 1,
    'nome': 'Jhonatan',
    'genero': 'Masculino',
    'formacao': ['Crossfit'],
    'experiencia': ['Crosfit'],
    'horario': 'manhã, tarde e noite',
    'atendimento': 'Academia',
    'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm0Ee53h-sFdUnIwZBoacJzz6CvnXeFHDSnw&s',
    'contato': {
      'telefone': '999999999',
      'email': 'zidane@mail.com',
      'instagram': 'instagram.com'
    }
  }, {
    'id': 2,
    'nome': 'Antônio',
    'genero': 'Masculino',
    'formacao': ['Crossfit'],
    'experiencia': ['Crosfit'],
    'horario': 'manhã, tarde e noite',
    'atendimento': 'Academia',
    'image': 'https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/06/11347_52C1A39356496734.jpg?w=419&h=283&crop=0',
    'contato': {
      'telefone': '999999999',
      'email': 'antony@mail.com',
      'instagram': 'instagram.com'
    }
  }, {
    'id': 3,
    'nome': 'Iago',
    'genero': 'Masculino',
    'formacao': ['Crossfit'],
    'experiencia': ['Crosfit'],
    'horario': 'manhã, tarde e noite',
    'atendimento': 'Academia',
    'image': 'https://platform.polygon.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/16296627/return_jafar_disneyscreencaps.com_1578.jpg?quality=90&strip=all&crop=0,5.5166374781086,100,88.966725043783',
    'contato': {
      'telefone': '999999999',
      'email': 'iagoruan@mail.com',
      'instagram': 'instagram.com'
    }
  }
]

const express = require('express');
const router = express.Router();  

// Middleware para esta rota
router.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

// Define as rotas. GET, POST, PUT e DELETE
router.get('/', (req, res) => {
  res.json(personals);
});  

router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const personal = personals.find(p => p.id === id);

  if (personal) {
    res.json(personal);
  } else {
    res.status(404).json({ erro: 'Personal não encontrado' });
  }
}); 

router.post('/', (req, res) => {
  console.log(req.body)
  res.send(`id ${req.body.username} 
    listra do personal ${req.body.password}`);
});

module.exports = router;
