const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
     await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Atlas conectado com sucesso!');
  } catch (error) {
    console.error('Erro ao conectar com o MongoDB Atlas:', error.message);
    // Encerra o processo com falha
    process.exit(1);
  }
};

module.exports = connectDB;