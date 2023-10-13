const addressBarContent = new URLSearchParams(location.search);
const gameId = addressBarContent.get("gameId");
// trovato game id

// dettagli evento

const generateGame = function (singlegame) {
  // prendo un riferimento alla row
  const row = document.getElementById("game-detail");
  row.innerHTML = ` 
    <div class="card my-4 w-50 text-center">
    <img src=" ${singlegame.imageUrl}" class="card-img-top " alt="game cover">
    <div class= "card-body text-start ms-5"> 
    <h2 class= "card-title fw-bold"> ${singlegame.name} </h2>
    <h5 class = "card-text fw-normal "> ${singlegame.description}</h5>
    <h5 class = "card-text fst-italic fw-normal"> Prodotto da  ${singlegame.brand}</h5>
    <h5 class = "card text border-0 fw-normal"> Prezzo speciale di  ${singlegame.price}€</h5>
    </div>
  </div>
    </div>
      `;
};

const getSingleGame = function () {
  fetch("https://striveschool-api.herokuapp.com/api/product/" + gameId, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTI4ZjFkNjEzOWM0MzAwMTg4MTQ1NjkiLCJpYXQiOjE2OTcxODIxNjcsImV4cCI6MTY5ODM5MTc2N30.JfiZzHIm0JhXzUA2F4WnXpXFRxV4RvNo9nq1s9ZOfVY",
    },
  })
    .then((result) => {
      if (result.ok) {
        return result.json();
      } else {
        throw new Error("errore caricamento");
      }
    })
    .then((gameData) => {
      generateGame(gameData);
    })
    .catch((error) => {
      console.log(error, "errore");
    });
};
getSingleGame();
