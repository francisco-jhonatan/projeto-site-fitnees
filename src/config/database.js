const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Amaral86:Nascimento14%23@amaral.534eoif.mongodb.net/?retryWrites=true&w=majority&appName=Amaral",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("MongoDB Atlas conectado com sucesso!");
  } catch (error) {
    console.error("Erro ao conectar com o MongoDB Atlas:", error.message);
    // Encerra o processo com falha
    process.exit(1);
  }
};

module.exports = connectDB;
