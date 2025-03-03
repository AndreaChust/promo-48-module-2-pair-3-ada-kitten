"use strict";


const list = document.querySelector(".js-list");
const kittenImg1 = "https://dev.adalab.es/gato-siames.webp";
const kittenName1 = "Anastacio";
const kittenRace1 = "Siamés";
const kittenDesc1 = "Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.";



/*Pasos en humano:
encapsular el codigo que pinta en una funcion.
-hacer la función
*/

// Que renderkitten devuelva un li pero con parametros distintos


const kittenImg2 = "https://dev.adalab.es/sphynx-gato.webp";
const kittenName2 = "Fiona";
const kittenRace2 = "Sphynx";
const kittenDesc2 = "Produce fascinación y curiosidad. Exótico, raro, bello, extraño…hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.";



const kittenImg3 = "https://dev.adalab.es/maine-coon-cat.webp";
const kittenName3 = "Cielo";
const kittenRace3 = "Main Coon";
const kittenDesc3 = "Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta."

const kittenData_1 = {
  image: kittenImg1,
  name: kittenName1,
  race: kittenRace1,
  description: kittenDesc1,
}

const kittenData_2 = {
  image: kittenImg2,
  name: kittenName2,
  race: kittenRace2,
  description: kittenDesc2,
}

const kittenData_3 = {
  image: kittenImg3,
  name: kittenName3,
  race: kittenRace3,
  description: kittenDesc3,
}

const kittenDataList = [kittenData_1, kittenData_2, kittenData_3];



/*
-seleccionar boton;
-cuando la usaria haga click en +:
    -se muestra el formulario.

seleccionar boton cancelar,
   cuando la usuaria haga click en el boton e cancelar:
   -se esconde el formulario: 

*/
function renderkitten(objectKitten) {
       return `<li class="card js-kity3">
<article>
  <img
    class="card_img"
    src=${objectKitten.image}
    alt="gatito"
  />
  <h3 class="card_title">${objectKitten.name}</h3>
  <h4 class="card_race">${objectKitten.race}</h4>
  <p class="card_description">${objectKitten.description}
   </p>
</article>
</li>`;
}

list.innerHTML = renderkitten(kittenData_1) + renderkitten(kittenData_2) + renderkitten(kittenData_3); 
// Llamamos a la funcion todas las veces que necesitemos con distintos parámetros.

const kity1 = document.querySelector(".js-kity1")
const kity2 = document.querySelector(".js-kity2");
const kity3 = document.querySelector(".js-kity3");

const button = document.querySelector(".js-btn-add");
const newform = document.querySelector(".js-new-form");

function showNewCatForm() {
  newform.classList.remove("collapsed");
}
button.addEventListener("click", showNewCatForm);


const cancel = document.querySelector(".js-btn-cancel");

function hideNewCatForm() {
  newform.classList.add("collapsed");
}
cancel.addEventListener("click", hideNewCatForm);



const searchButton = document.querySelector(".js_button-search");
const SearchText = document.querySelector(".js_in_search_desc");


//* Seleccionar elementos con el query; 
// Cuando la usuaria haga click en buscar:
// -guardar el valor del texto que introduce la usuaria (elegante)
  // Si la descripcion escrita coincide con el texto del gatito 1
  // {oculta gatitos 2 y 3}
  // Si la descripcion escrita coincide con el texto del gatito 2
// {oculta gatitos 1 y 3}
// Si la descripcion  escrita coincide con el texto del gatito 3
// {oculta gatitos 1 y 2};
// Cuando/Si el input buscar este vacío:
// muestra todos los gatitos
// cuando le damos al boton buscar sale Anastacio
// Si el input descripcion esta vacio elimina la clase collapsed de todos

const filterKitten = (event) => {
  event.preventDefault();
  const descText = SearchText.value;
    if (descText === "") {
      kity1.classList.remove("collapsed");
      kity2.classList.remove("collapsed");
      kity3.classList.remove("collapsed");
    } else if (kittenDesc1.includes(descText)){
    kity1.classList.remove("collapsed");
    kity2.classList.add("collapsed");
    kity3.classList.add("collapsed");
  } else if (kittenDesc2.includes(descText)){
    kity2.classList.remove("collapsed");
    kity1.classList.add("collapsed");
    kity3.classList.add("collapsed");
  } else if (kittenDesc3.includes(descText)){
    kity3.classList.remove("collapsed");
    kity2.classList.add("collapsed");
    kity1.classList.add("collapsed");
  }
}

searchButton.addEventListener("click", filterKitten);


// function add (a, b) {
//   const result = a + b;
//   return result
// }
// const resultValue = add(1, 2);

