const cardContainer = document.getElementById("card-container");
const searchInput = document.getElementById("search");
const btnSearch = document.getElementById("search-btn");
const modal = document.getElementById("modal");


const baseUrl = "http://localhost:3333/api/personals?param=0";


async function buscarPersonals(url) {
  try {
    const resp = await fetch(url);
    if (!resp.ok) throw new Error(`Erro ${resp.status}`);
    const data = await resp.json();
    return data.personals;
  } catch (error) {
    console.error("Erro ao buscar personals:", error);
    return [];
  }
}


function drawCards(personals) {
  cardContainer.innerHTML = ""; 
  const fragment = document.createDocumentFragment();

  personals.forEach(personal => {
  
    if (personal.foto.includes("\\")) {
      const partes = personal.foto.split("\\");
      personal.foto = `${partes[0]}/${partes[1]}`;
    }

   
    const cardDiv = document.createElement("div");
    cardDiv.className = "card-model";
    cardDiv.style.backgroundImage = `url(${personal.foto})`;

    const personalName = document.createElement("h1");
    personalName.textContent = personal.nome;
    cardDiv.appendChild(personalName);

  
    cardDiv.addEventListener("click", () => drawModal(personal));

    fragment.appendChild(cardDiv);
  });

  cardContainer.appendChild(fragment);
}


function drawModal(personal) {
  modal.style.display = "flex";

  document.getElementById("foto").style.backgroundImage = `url(${personal.foto})`;
  document.getElementById("texto").textContent = personal.descricao;
  document.getElementById("nome").textContent = personal.nome;
  document.getElementById("genero").textContent = `Gênero: ${personal.genero}`;

  document.getElementById("formacao").textContent = `Formação: ${personal.formacao}`;

  document.getElementById("experiencia").textContent = `Experiência: ${personal.experiencia}`;

  document.getElementById("horario").textContent = `Horários: ${personal.horarioDeAtendimento}`;

  document.getElementById("atendimento").textContent = `Atendimento: ${personal.formaDeAtendimento.join(", ")}`;

  document.getElementById("numero").textContent = `Telefone: ${personal.contato.telefone}`;
  document.getElementById("email").textContent = `Email: ${personal.contato.email}`;
  document.getElementById("instagram").textContent = `Instagram: ${personal.contato.instagram}`;
}


window.addEventListener("click", event => {
  if (event.target === modal) modal.style.display = "none";
});


(async () => {
  const personals = await buscarPersonals(baseUrl);
  drawCards(personals);
})();


btnSearch.addEventListener("click", async () => {
  const nome = searchInput.value.trim();
  if (!nome) return;

  const urlBusca = `http://localhost:3333/api/personals?param=${encodeURIComponent(nome)}`;
  const personals = await buscarPersonals(urlBusca);
  drawCards(personals);
});
