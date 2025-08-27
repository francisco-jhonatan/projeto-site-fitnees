const mongoose = require('mongoose');

const PersonalSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: [true, 'O nome é obrigatório.'],
    trim: true,
  },
  foto: {
    type: String, // URL da foto
    required: [true, 'A foto é obrigatória.'],
  },
  descricao: {
    type: String,
    required: [true, 'A descrição é obrigatória.'],
  },
  genero: {
    type: String,
    enum: ['Masculino', 'Feminino', 'Outro'],
    required: [true, 'O gênero é obrigatório.'],
  },
  formacao: {
    type: String,
    required: [true, 'A formação é obrigatória.'],
  },
  experiencia: {
    type: String,
    required: [true, 'A experiência é obrigatória.'],
  },
  formaDeAtendimento: {
    type: [String], // Array de strings, ex: ["Online", "Presencial"]
    required: [true, 'A forma de atendimento é obrigatória.'],
  },
  horarioDeAtendimento: {
    type: String,
    required: [true, 'O horário de atendimento é obrigatório.'],
  },
  contato: {
    email: { type: String, required: true },
    telefone: { type: String, required: true },
    instagram: { type: String },
  },
}, {
  timestamps: true, // Adiciona createdAt e updatedAt automaticamente
});

module.exports = mongoose.model('Personal', PersonalSchema);