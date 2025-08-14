const express = require('express');
const personalsRoutes = require('./routes/personals'); // Importa a rota
const mongoose = require('mongoose');
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
mongoose.connect('mongodb+srv://Amaral86:'+encodeURIComponent('Nascimento14#')+'@amaral.534eoif.mongodb.net/?retryWrites=true&w=majority&appName=Amaral')
.then(()=>{
  console.log('conexão estabelecida')
})
const blog = new Schema({
  title: String,
  slug: String,
  published: Boolean,
  author: String,
  content: String,
  tags: [String],
  createdAt: Date,
  updatedAt: Date,
  comments: [{
    user: String,
    content: String,
    votes: Number
  }]
});

mongoose.connect("mongodb+srv://franciscojhonatan0077:G6dJyPyVxfT23fQU@projetoacademia.476jyg3.mongodb.net/?retryWrites=true&w=majority&appName=ProjetoAcademia")
.then(()=>{
  console.log("Conexão estabelecida")
})

// Server rodando
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});



// import mongoose from 'mongoose';
// const { Schema } = mongoose;

// const blogSchema = new Schema({
//   title: String, // String is shorthand for {type: String}
//   author: String,
//   body: String,
//   comments: [{ body: String, date: Date }],
//   date: { type: Date, default: Date.now },
//   hidden: Boolean,
//   meta: {
//     votes: Number,
//     favs: Number
//   }
// });
