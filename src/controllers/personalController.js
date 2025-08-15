const Personal = require('../models/Personal');

// 1. Criar um novo Personal Trainer
exports.createPersonal = async (req, res) => {
  try {
    const {
      nome,
      descricao,
      genero,
      formacao,
      experiencia,
      formaDeAtendimento,
      horarioDeAtendimento,
      contato, // Espera-se um objeto JSON stringificado: {"email":"a@a.com", "telefone":"999"} 
    } = req.body;

    // Verifica se a foto foi enviada
    if (!req.file) {
      return res.status(400).json({ message: 'O envio da foto é obrigatório.' });
    }

    // Monta a URL da foto
    const fotoUrl = `${req.protocol}://${req.get('host')}/${req.file.path}`;
    
    const newPersonal = new Personal({
      nome,
      foto: fotoUrl,
      descricao,
      genero,
      formacao,
      experiencia,
      formaDeAtendimento: Array.isArray(formaDeAtendimento) ? formaDeAtendimento : formaDeAtendimento.split(','), // Garante que seja um array
      horarioDeAtendimento,
      contato: JSON.parse(contato), // Converte a string JSON para objeto
    });

    await newPersonal.save();
    res.status(201).json({ message: 'Personal trainer cadastrado com sucesso!', personal: newPersonal });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao cadastrar personal trainer.', error: error.message });
  }
};

// 2. Buscar Personal Trainer pelo nome
exports.searchPersonalByName = async (req, res) => {
  try {
    const { nome } = req.query; // Busca o parâmetro 'nome' da URL, ex: /search?nome=João
    
    if (!nome) {
      return res.status(400).json({ message: 'O parâmetro de busca "nome" é obrigatório.' });
    }

    // Usa uma expressão regular para fazer uma busca "case-insensitive" (não diferencia maiúsculas de minúsculas)
    const personals = await Personal.find({ nome: { $regex: nome, $options: 'i' } });

    if (personals.length === 0) {
      return res.status(404).json({ message: 'Nenhum personal trainer encontrado com esse nome.' });
    }

    res.status(200).json(personals);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar personal trainers.', error: error.message });
  }
};

// 3. Listar Personais com Paginacão (12 por página))
exports.getPaginatedPersonals = async (req, res) => {
  try {
    const page = parseInt(req.query.param) || 0; // Pega o parâmetro 'param' da URL, default é 0
    const limit = 12; // 12 resultados por página
    const skip = page * limit; // Pula os documentos das páginas anteriores
    console.log(page)
    const personals = await Personal.find()
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 }); // Ordena pelos mais recentes

    const totalPersonals = await Personal.countDocuments();
    
    res.status(200).json({
      personals,
      totalPages: Math.ceil(totalPersonals / limit),
      currentPage: page,  
    });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar personal trainers.', error: error.message });
  }
};