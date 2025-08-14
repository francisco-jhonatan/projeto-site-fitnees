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


mongoose.connect('mongodb+srv://franciscojhonatan0077:G6dJyPyVxfT23fQU@projetoacademia.476jyg3.mongodb.net/?retryWrites=true&w=majority&appName=ProjetoAcademia')
  .then(() => {
    console.log("Conexão estabelecida");
  })
  .catch(err => {
    console.error("Erro na conexão MongoDB:", err);
  });


const blogSchema = new Schema({
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

const Blog = mongoose.model('Blog', blogSchema);


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
