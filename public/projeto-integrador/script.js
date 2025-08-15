
// import { getPersonals, searchPersonalsByName} from './scripts/apiServices';

//Buscar a primeira página de personais ao carregar a página
// async function getPersonals12() {
//   try {
//     console.log('opa')
//     console.log('Buscando a primeira página de personais...');
//     const data = await getPersonals(0); // Busca a página 0
//     console.log('Personais encontrados:', data.personals);
//     console.log('Página atual:', data.currentPage);
//     console.log('Total de páginas:', data.totalPages);
//     console.log(data)
//   } catch (error) {
//     alert(error.message);
//   }
// }
// getPersonals12()

// (async () => {
//     try {
//         console.log('Buscando por "Iago"...');
//         const resultados = await searchPersonalsByName('Iago');
//         console.log('Resultados da busca:', resultados);
//     } catch (error) {
//         alert(error.message);
//     }
// })();

const cardContainer = document.getElementById("card-container");

let url = "http://localhost:3333/api/personals/"; // Modificar quando colocar em produção

async function chamarApi() {
  const resp = await fetch(url);
  if (resp.status === 200) {
    const obj = await resp.json();
    console.log(obj.personals);
    drawCards(obj)
  }
}

chamarApi()

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
    cardDiv.style.backgroundImage = `url(${personals[i].image})`;

    let personalName = document.createElement("h1");
    personalName.textContent = personals[i].nome;

    cardDiv.appendChild(personalName);
    cardHolder.appendChild(cardDiv);
    cardFrag.appendChild(cardHolder);
    cardContainer.appendChild(cardFrag);
  }

  function DrawModal(personal) {

    let modal = document.getElementById("modal")
    modal.style.display = "flex";

    document.getElementById('foto').style.backgroundImage = `url(${personal.image})`

    document.getElementById('nome').textContent = personal.nome;
    document.getElementById('genero').textContent = `Gênero: ${personal.genero}`;

    const formacoes = personal.formacao.join(', ');
    document.getElementById('formacao').textContent = `Formação: ${formacoes}`;

    const experiencias = personal.experiencia.join(', ');
    document.getElementById('experiencia').textContent = `Experiência: ${experiencias}`;

    document.getElementById('horario').textContent = `Horários: ${personal.horario}`;
    document.getElementById('atendimento').textContent = `Atendimento: ${personal.atendimento}`;

    document.getElementById('telefone').textContent = `Telefone: ${personal.contato.telefone}`;
    document.getElementById('email').textContent = `Email: ${personal.contato.email}`;
    document.getElementById('instagram').textContent = `Instagram: ${personal.contato.instagram}`;

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