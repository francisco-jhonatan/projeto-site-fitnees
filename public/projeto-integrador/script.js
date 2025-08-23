// const cardContainer = document.getElementById("card-container");
// const searchInput = document.getElementById("search");
// const btnSearch = document.getElementById("search-btn");
const modal = document.getElementById("modal");

//  import {searchPersonalsByName} from './scripts/apiServices'

// async function getPersonalByName(nomePersonal) {
//     try {
//         console.log(`Buscando por "${nomePersonal}"...`);
//         const resultados = await searchPersonalsByName(nomePersonal);
//         console.log('Resultados da busca:', resultados);
//     } catch (error) {
//         alert(error.message);
//     }
// }

// getPersonalByName() //chamar a função na busca por nome

const cardContainer = document.getElementById("card-container");

let url = "http://localhost:3333/api/personals?param=0"; // Modificar quando colocar em produção

async function chamarApi() {
  const resp = await fetch(url);
  if (resp.status === 200) {
    const obj = await resp.json();
    cardContainer.innerHTML = "";
    drawCards(obj.personals)
  }
}


chamarApi()

let urlBuscaPorNome = "http://localhost:3333/api/personals/search?nome=";

const search = document.getElementById('search')
const btnSearch = document.getElementById("search-btn");
btnSearch.addEventListener('click', () => {
  const nome = search.value.trim();
  if (nome !== "") {
    urlBuscaPorNome = "http://localhost:3333/api/personals/search?nome=" + nome;

    chamarApiNome()
  }
})


async function chamarApiNome() {
  const resp = await fetch(urlBuscaPorNome);
  const mensagemErro = document.getElementById("mensagem-erro");
  if (resp.status === 200) {
    const obj = await resp.json();

    if (!obj || obj.length === 0) {
      cardContainer.innerHTML = "";
      mensagemErro.style.display = "block";
      cardContainer.style.display = "none";
    } else {
      mensagemErro.style.display = "none";
      cardContainer.style.display = "flex";
      cardContainer.innerHTML = "";
      drawCards(obj);
    }

  } else {
    mensagemErro.textContent ="Personal não encontrado."
    mensagemErro.style.display = "block";
    cardContainer.innerHTML = "";
    cardContainer.style.display = "none";
  }
}

search.addEventListener('input', () => {
  const mensagemErro = document.getElementById("mensagem-erro");
  if (search.value.trim() === "") {
    mensagemErro.style.display = "none"
    cardContainer.style.display = "flex";
    cardContainer.innerHTML = "";
    chamarApi();
  }
});

search.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    btnSearch.click();
  }
});



function drawCards(personals) {

  for (let i = 0; i < personals.length; i++) {
    let cardFrag = document.createDocumentFragment();
    let cardHolder = document.createElement("div");
    cardHolder.className = "card-holder";
    cardHolder.addEventListener("click", () => {
      DrawModal(personals[i]);
    });


    let cardDiv = document.createElement("div");
    cardDiv.className = "card-model";

    // BEGIN GAMBIARRA
    const { foto } = personals[i]
    const fotos = foto.split('\\')
    personals[i].foto = fotos[0] + "/" + fotos[1]
    // END GAMBIARRA

    cardDiv.style.backgroundImage = 'url(' + personals[i].foto + ')';
    let personalName = document.createElement("h1");
    personalName.textContent = personals[i].nome;

    cardDiv.appendChild(personalName);
    cardHolder.appendChild(cardDiv);
    cardFrag.appendChild(cardHolder);
    cardContainer.appendChild(cardFrag);
  }

  function DrawModal(personal) {
    console.log(personal)
    let modal = document.getElementById("modal")
    modal.style.display = "flex";

    document.getElementById('foto').style.backgroundImage = `url(${personal.foto})`

    document.getElementById('texto').textContent = personal.descricao
    document.getElementById('nome').textContent = personal.nome;
    document.getElementById('genero').textContent = `Gênero: ${personal.genero}`;

    document.getElementById('formacao').textContent = `Formação: ${personal.formacao}`;

    document.getElementById('experiencia').textContent = `Experiência: ${personal.experiencia}`;


    document.getElementById('horario').textContent = `Horários: ${personal.horarioDeAtendimento}`;
    let atendimento = personal.formaDeAtendimento.join(', ')

    document.getElementById('atendimento').textContent = `Atendimento: ${atendimento}`;
    console.log(personal.contato.instagram)

    document.getElementById('numero').innerHTML == ` ${personal.contato.telefone}`;
    document.getElementById('email').textContent= `Email:  ${personal.contato.email}`;
    document.getElementById('instagram').innerHTML == ` ${personal.contato.instagram}`;

  }




  function switchModal(modal) {

    const actualStyle = modal.style.display

    if (actualStyle == 'flex') {
      modal.style.display = 'none'
    }
    else {
      modal.style.display = 'flex'
    }
  }

  window.onclick = function (event) {
    const modal = document.getElementById('modal')
    if (event.target == modal) {
      switchModal(modal)
    }
  }
}