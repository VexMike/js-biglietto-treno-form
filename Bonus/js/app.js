console.log("Prova");

// Calcolo del prezzo finale con il Form

// Prendere i km dall'input nell'HTML
const kmInputElement = document.getElementById("km"); //Object | Null
console.log(kmInputElement);

// Prendere l'elemento collegato all'età, il select dall'HTML
const selectElement = document.getElementById("select-input");
console.log(selectElement);

const formElement = document.getElementById("form-ticket");

// €/km
const prezzoPerKm = 0.21; // number

// Calcolare il prezzo al km
const prezzoBase = km * prezzoPerKm; // Number
console.log(prezzoBase, typeof prezzoBase);

// Prendere il button per impostarlo come input button
const buttonElement = document.getElementById("submit");
console.log(buttonElement);



// Validazione dati
// km > 0
console.log(km > 0);
// km non è un NaN
console.log(!isNaN(km));

formElement.addEventListener("submit", function () {
  // Impedisco che il Form venga inviato per poter visualizzare i dati raccolti
  event.preventDefault();

  // Raccolta dati
  const km = parseFloat(kmInputElement.value /* String */); // Number
  console.log("Km percorsi: ", km);

  const selectValue = selectElement.value;

  if (km > 0 && !isNaN(km)) {


    if (selectValue === "1") {
      sconto = prezzoBase * 0.2;
      showDiscout = 20;
    } else if (selectValue === "2") {
      // -- ALTRIMENTI SE età passeggero >65 = sconto40%
      sconto = prezzoBase * 0.4;
      showDiscout = 40;
    } else {
      // -- ALTRIMENTI sconto = 0%
      sconto = 0;
      showDiscout = 0;
    }

    // Prezzo finale
    const prezzo = prezzoBase - selectValue; // numebr 
    console.log(prezzo.toFixed(2), typeof prezzo, prezzo)


    // Prendere elementi da stampare sull'HTML
    const kmElement = document.getElementById("km-percorsi");
    kmElement.innerHTML = km + "km";

    const prezzoBaseElement = document.getElementById("prezzo-base");
    prezzoBaseElement.innerHTML = prezzoBase.toFixed(2) + "&euro";

    const scontoElement = document.getElementById("sconto-applicato");
    scontoElement.innerHTML = selectValue + "%";

    const prezzofinaleElement = document.getElementById("prezzo-totale");
    prezzofinaleElement.innerHTML = prezzo.toFixed(2) + "&euro";

    

  } else {
    // ALTRIMENTI
    alert("I dati inseriti non sono corretti, riprova");
  }
});
