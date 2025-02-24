"use strict";

const list = document.querySelector(".js-list");
const kittenImg1 = "https://dev.adalab.es/gato-siames.webp";
const kittenName1 = "Anastacio";
const kittenRace1 = "Siamés";
const kittenOne = `<li class="card js-kity1">

<article>
  <img
    class="card_img"
    src=${kittenImg1}
    alt="gatito"
  />
  <h3 class="card_title">${kittenName1}</h3>
  <h4 class="card_race">${kittenRace1}</h4>
  <p class="card_description">
            Porte elegante, su patrón de color tan característico y sus ojos
            de un azul intenso, pero su historia se remonta a Asía al menos
            hace 500 años, donde tuvo su origen muy posiblemente.
   </p>
</article>
</li>`;

const kittenImg2 = "https://dev.adalab.es/sphynx-gato.webp";
const kittenName2 = "Fiona";
const kittenRace2 = "Sphynx";
const kittenTwo = `<li class="card js-kity2">
<article>
  <img
    class="card_img"
    src=${kittenImg2}
    alt="gatito"
  />
  <h3 class="card_title">${kittenName2}</h3>
  <h4 class="card_race">${kittenRace2}</h4>
  <p class="card_description">
            Produce fascinación y curiosidad. Exótico, raro, bello, extraño…
            hasta con pinta de alienígena han llegado a definir a esta raza
            gatuna que se caracteriza por la «ausencia» de pelo.
   </p>
</article>
</li>`;



const kittenImg3 = "https://dev.adalab.es/maine-coon-cat.webp";
const kittenName3 = "Cielo";
const kittenRace3 = "Main Coon";
const kittenThree = `<li class="card js-kity3">
<article>
  <img
    class="card_img"
    src=${kittenImg3}
    alt="gatito"
  />
  <h3 class="card_title">${kittenName3}</h3>
  <h4 class="card_race">${kittenRace3}</h4>
  <p class="card_description">
             Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
            bella mirada se ha convertido en una de sus señas de identidad.
            Sus ojos son grandes y las orejas resultan largas y en punta.
   </p>
</article>
</li>`;


list.innerHTML = kittenOne + kittenTwo + kittenThree;
const kity1 = document.querySelector(".js-kity1")
const kity2 = document.querySelector(".js-kity2");
const kity3 = document.querySelector(".js-kity3");

const button = document.querySelector(".js-btn-add");
const newform = document.querySelector(".js-new-form");
button.addEventListener("click", () => {
  newform.classList.remove("collapsed");
  console.log("gatitos");
  
})

const searchButton = document.querySelector(".js_button-search");
const SearchText = document.querySelector(".js_in_search_desc");

const kittenDesc1 = "Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.";

const kittenDesc2 = "Produce fascinación y curiosidad. Exótico, raro, bello, extraño hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.";

const kittenDesc3 = "Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.";


searchButton.addEventListener("click", (event) => {
  event.preventDefault();
  const descText = SearchText.value;
  if (kittenDesc1.includes(descText)) {
      kity2.classList.add("collapsed");
      kity3.classList.add("collapsed");
  }
  if (kittenDesc2.includes(descText)) {
    kity1.classList.add("collapsed");
    kity3.classList.add("collapsed");
  }
  if (kittenDesc3.includes(descText)){
    kity2.classList.add("collapsed");
    kity1.classList.add("collapsed");

  }
});






