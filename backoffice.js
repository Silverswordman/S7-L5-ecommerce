const addressBarContent = new URLSearchParams(location.search);
const gameId = addressBarContent.get("gameId");
console.log(gameId);

// non mi da accesso la key
if (gameId) {
  // se siamo in modalità modifica quindi vieni da ID
  fetch("https://striveschool-api.herokuapp.com/api/product/" + gameId),
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTI4
        ZjFkNjEzOWM0MzAwMTg4MTQ1NjkiLCJpYXQiOjE2OTcxODIxNjcsImV4cCI6MTY5ODM5MTc2N30.JfiZz
        HIm0JhXzUA2F4WnXpXFRxV4RvNo9nq1s9ZOfVY`,
      },
    }
      .then((result) => {
        if (result.ok) {
          return result.json();
        } else {
          throw new Error("ERRORE NEL RECUPERO DETTAGLIO");
        }
      })
      .then((game) => {
        // luce verde! abbiamo ottenuto i dettagli
        // dobbiamo ora ripopolare il form!
        const nameInput = document.getElementById("name");
        const descInput = document.getElementById("description");
        const brandInput = document.getElementById("brand");
        const priceInput = document.getElementById("price");
        const imgInput = document.getElementById("img");

        // li ripopolo con i dettagli di eventDetails
        nameInput.value = game.name;
        descInput.value = game.description;
        brandInput.value = game.brand;
        priceInput.value = game.price;
        imgInput.value = game.imageUrl;
      })
      .catch((err) => {
        console.log("errore", err);
      });
}

// prendo il form
const form = document.getElementsByTagName("form")[0];
// console.log(form)
form.addEventListener("submit", function (ev) {
  ev.preventDefault();

  const nameInput = document.getElementById("name");
  const descInput = document.getElementById("description");
  const brandInput = document.getElementById("brand");
  const priceInput = document.getElementById("price");
  const imgInput = document.getElementById("img");

  // value nel nuovo oggetto
  const newGame = {
    name: nameInput.value,
    description: descInput.value,
    brand: brandInput.value,
    price: priceInput.value,
    imageUrl: imgInput.value,
  };
  console.log(newGame); // check invio

  const reset = function () {
    nameInput.value = "";
    descInput.value = "";
    brandInput.value = "";
    priceInput.value = "";
    imgInput.value = "";
  };

  let methodToUse = "POST";
  if (gameId) {
    methodToUse = "PUT";
  }

  // la POST va sempre fatta sull'indirizzo GENERICO
  // una PUT va sempre fatta su un INDIRIZZO SPECIFICO, COMPLETO DI ID

  let urlToUse = "https://striveschool-api.herokuapp.com/api/product";
  if (gameId) {
    urlToUse = "https://striveschool-api.herokuapp.com/api/product/" + gameId;
  }

  fetch(urlToUse, {
    method: methodToUse,
    body: JSON.stringify(newGame),
    headers: {
      "Content-type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTI4ZjFkNjEzOWM0MzAwMTg4MTQ1NjkiLCJpYXQiOjE2OTcxODIxNjcsImV4cCI6MTY5ODM5MTc2N30.JfiZzHIm0JhXzUA2F4WnXpXFRxV4RvNo9nq1s9ZOfVY",
    },
  })
    .then((result) => {
      if (result.ok) {
        alert("Nuovo gioco aggiunto");
      } else {
        console.log("non siamo riusciti a salvare il gioco");
      }
    })
    .catch((reject) => {
      console.log(reject);
    });
});

//// reset
const reset = function () {
  const nameInput = document.getElementById("name");
  const descInput = document.getElementById("description");
  const brandInput = document.getElementById("brand");
  const priceInput = document.getElementById("price");
  const imgInput = document.getElementById("img");

  nameInput.value = "";
  descInput.value = "";
  brandInput.value = "";
  priceInput.value = "";
  imgInput.value = "";
};

const resetButton = document.getElementsByClassName("btn-danger")[0];
console.log(resetButton);
resetButton.addEventListener("click", reset);
