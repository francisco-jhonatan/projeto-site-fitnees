
const URL = 'http://localhost:3333/api/personals';

export const getPersonals = async (page = 0) => {
  try {
    const response = await fetch(`${URL}?param=${page}`);

    if (!response.ok) {
      // Se a resposta não for bem-sucedida (ex: 404, 500), lança um erro.
      const errorData = await response.json();
      throw new Error(errorData.message || 'Não foi possível buscar os personal trainers.');
    }

    return await response.json();
  } catch (error) {
    console.error('Erro ao buscar personal trainers:', error);
    // Relança o erro para que o código que chamou a função possa tratá-lo.
    throw error;
  }
};

export const searchPersonalsByName = async (name) => {
  if (!name || name.trim() === '') {
    // Retorna uma lista vazia ou pode optar por buscar todos (depende da regra de negócio)
    return []; 
  }

  try {
    const response = await fetch(`${URL}/search?nome=${encodeURIComponent(name)}`);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Erro na busca.');
    }

    return await response.json();
  } catch (error) {
    console.error(`Erro ao buscar por "${name}":`, error);
    throw error;
  }
};

export const createPersonal = async (formData) => { // Cria o personal
  try {
    const response = await fetch(URL, {
      method: 'POST',
      body: formData, // NÃO defina o 'Content-Type', o navegador fará isso automaticamente para FormData
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Não foi possível cadastrar o personal trainer.');
    }

    return await response.json();
  } catch (error) {
    console.error('Erro ao cadastrar personal trainer:', error);
    throw error;
  }
};