"use strict";

const list = document.querySelector(".js-list");
const kittenImg1 = "https://dev.adalab.es/gato-siames.webp";
const kittenName1 = "Anastacio";
const kittenRace1 = "Siamés";



/*Pasos en humano:
encapsular el codigo que pinta en una funcion.
-hacer la función
*/

// Que renderkitten devuelva un li pero con parametros distintos


const kittenImg2 = "https://dev.adalab.es/sphynx-gato.webp";
const kittenName2 = "Fiona";
const kittenRace2 = "Sphynx";



const kittenImg3 = "https://dev.adalab.es/maine-coon-cat.webp";
const kittenName3 = "Cielo";
const kittenRace3 = "Main Coon";


/*
-seleccionar boton;
-cuando la usaria haga click en +:
    -se muestra el formulario.

seleccionar boton cancelar,
   cuando la usuaria haga click en el boton e cancelar:
   -se esconde el formulario: 

*/
function renderkitten(url, desc, name, race) {
       return `<li class="card js-kity3">
<article>
  <img
    class="card_img"
    src=${url}
    alt="gatito"
  />
  <h3 class="card_title">${name}</h3>
  <h4 class="card_race">${race}</h4>
  <p class="card_description">
             Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
            bella mirada se ha convertido en una de sus señas de identidad.
            Sus ojos son grandes y las orejas resultan largas y en punta.
   </p>
</article>
</li>`;
}

//Tenemos que hacer las constantes con las descripciones y terminar el renderkitten, cuando tengamos eso, tenemos que hacer el ejercicio de objetos.


list.innerHTML = renderkitten(kittenImg1, undefined, kittenName1, kittenRace1) + renderkitten()

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

const kittenDesc1 = "Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.";

const kittenDesc2 = "Produce fascinación y curiosidad. Exótico, raro, bello, extraño hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.";

const kittenDesc3 = "Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.";

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

