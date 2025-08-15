// Importa as funções que você criou
import {createPersonal } from './apiServices.js';

// --- Exemplo 3: Lógica para o formulário de cadastro ---
const form = document.getElementById('personal-form');

form.addEventListener('submit', async (event) => {
  event.preventDefault(); // Impede o recarregamento da página

  try {
    // Cria um objeto FormData diretamente a partir do elemento do formulário.
    // Ele captura automaticamente todos os campos e o arquivo.
    const formData = new FormData(form);

    console.log('Enviando dados do formulário...');
    const result = await createPersonal(formData);

    console.log('Sucesso!', result);
    alert(result.message);
    form.reset(); // Limpa o formulário após o sucesso

  } catch (error) {
    console.error('Falha no cadastro:', error);
    alert(`Erro: ${error.message}`);
  }
});