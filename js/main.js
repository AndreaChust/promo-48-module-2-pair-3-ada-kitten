"use strict";

const list = document.querySelector(".js-list");
const kittenOne = `<li class="card">
<article>
  <img
    class="card_img"
    src="https://dev.adalab.es/gato-siames.webp"
    alt="gatito"
  />
  <h3 class="card_title">Anastacio</h3>
  <h4 class="card_race">Siamés</h4>
  <p class="card_description">
            Porte elegante, su patrón de color tan característico y sus ojos
            de un azul intenso, pero su historia se remonta a Asía al menos
            hace 500 años, donde tuvo su origen muy posiblemente.
   </p>
</article>
</li>`;

const kittenTwo = `<li class="card">
<article>
  <img
    class="card_img"
    src="https://dev.adalab.es/sphynx-gato.webp" alt="sphynx-cat"
    alt="gatito"
  />
  <h3 class="card_title">Fiona</h3>
  <h4 class="card_race">Sphynx</h4>
  <p class="card_description">
            Produce fascinación y curiosidad. Exótico, raro, bello, extraño…
            hasta con pinta de alienígena han llegado a definir a esta raza
            gatuna que se caracteriza por la «ausencia» de pelo.
   </p>
</article>
</li>`;

const kittenThree = `<li class="card">
<article>
  <img
    class="card_img"
    src="https://dev.adalab.es/maine-coon-cat.webp" alt="maine-coon-cat"
    alt="gatito"
  />
  <h3 class="card_title">Cielo</h3>
  <h4 class="card_race">Main Coon</h4>
  <p class="card_description">
             Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
            bella mirada se ha convertido en una de sus señas de identidad.
            Sus ojos son grandes y las orejas resultan largas y en punta.
   </p>
</article>
</li>`;

list.innerHTML = kittenOne + kittenTwo + kittenThree;

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




searchButton.addEventListener("click", (ev) => {
  ev.preventDefault();
  const SearchText = input_in_search_desc.value;
  if (kittenDesc1.includes(descrSearchText)) {
     

  }

  
});






