const express = require('express');
const personalsRoutes = require('./routes/personals'); // Importa a rota

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());


app.use('/personals', personalsRoutes);
app.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});



const Blog = mongoose.model('Blog', blogSchema);


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

