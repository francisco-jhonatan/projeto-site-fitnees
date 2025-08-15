var personals = [
  {
    'id': 0,
    'nome': 'Zidane',
    'genero': 'Masculino',
    'formacao': 'Crossfit',
    'experiencia': 'Crosfit',
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
const personalsRoutes = require('./routes/personals');
const mongoose = require('mongoose');
const { Schema } = mongoose;
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());


app.use('/personals', personalsRoutes);
app.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});


// mongoose.connect('mongodb+srv://franciscojhonatan0077:G6dJyPyVxfT23fQU@projetoacademia.476jyg3.mongodb.net/?retryWrites=true&w=majority&appName=ProjetoAcademia')
//   .then(() => {
//     console.log("Conexão estabelecida");
//   })
//   .catch(err => {
//     console.error("Erro na conexão MongoDB:", err);
//   });





// const Blog = mongoose.model('Blog', blogSchema);


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://franciscojhonatan0077:G6dJyPyVxfT23fQU@projetoacademia.476jyg3.mongodb.net/?retryWrites=true&w=majority&appName=ProjetoAcademia/personal')

  const personalSchema = new mongoose.Schema({
    nome: String,
    genero: String,
    formacao: String,
    experiencia: String,
    horario: String,
    atendimento: String,
    image: String,
    contato: {
      telefone: String,
      email: String,
      instagram: String
    }
  });
  const personal = mongoose.model('personal', personalSchema);
  const p = new personal({
    nome: personals[0].nome,
    genero: personals[0].genero,
    formacao: personals[0].formacao,
    experiencia: personals[0].experiencia,
    horario: personals[0].experiencia,
    atendimento: personals[0].atendimento,
    image: personals[0].image,
    contato: {
      telefone: personals[0].contato.telefone,
      email: personals[0].contato.email,
      instagram: personals[0].contato.instagram,
    }

  })
  await p.save();



}