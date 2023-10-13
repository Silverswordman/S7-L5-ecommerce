const addressBarContent = new URLSearchParams(location.search);
const gameId = addressBarContent.get("gameId");

// trovato game id

// dettagli evento
///////

//FUNZIONE DELETE ONCLICK EVENTLISTENER NON VA

const deleteGame = function () {
  // questa funzione servirà ad eliminare l'evento corrente
  fetch("https://striveschool-api.herokuapp.com/api/product/" + gameId, {
    method: "DELETE",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTI4ZjFkNjEzOWM0MzAwMTg4MTQ1NjkiLCJpYXQiOjE2OTcxODIxNjcsImV4cCI6MTY5ODM5MTc2N30.JfiZzHIm0JhXzUA2F4WnXpXFRxV4RvNo9nq1s9ZOfVY",
    },
  })
    .then((result) => {
      if (result.ok) {
        alert("Gioco Rimosso");
        location.assign("./homepage.html"); // ritorno in home
      } else {
        alert("Problema con l'eliminazione del gioco");
        throw new Error("Errore nella DELETE");
      }
    })
    .catch((error) => {
      console.log("ERRORE", error);
    });
};
//////

//genera gioco singolo

const generateGame = function (singlegame) {
  const row = document.getElementById("game-detail");
  row.innerHTML = ` 
    <div class="card my-4 w-50 text-center border border-danger rounded-0">
    <img src=" ${singlegame.imageUrl}" class="card-img-top p-4 " alt="game cover">
    <div class= "card-body text-start ms-5"> 
    <h2 class= "card-title fw-bold"> ${singlegame.name} </h2>
    <h5 class = "card-text fw-normal "> ${singlegame.description}</h5>
    <h5 class = "card-text fst-italic fw-normal"> Prodotto da  ${singlegame.brand}</h5>
    <h5 class = "card text border-0 fw-normal"> Prezzo speciale di  ${singlegame.price}€</h5>
    <button onclick="deleteGame()" class="btn btn-sm btn-danger mt-5 mb-1 rounded-0 border-dark
     fst-italic" >Elimina</button>
     <a href="backoffice.html?gameId=${singlegame._id}" class="btn btn-sm btn-warning mt-5 mb-1 rounded-0 border-dark
     fst-italic"> Edit</a>
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
