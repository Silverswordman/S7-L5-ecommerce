const addressBarContent = new URLSearchParams(location.search);
const gameId = addressBarContent.get("gameId");
// trovato game id

// dettagli evento

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
      getSingleGame(gameData);
    })
    .catch((error) => {
      console.log(error, "errore");
    });
};
getSingleGame();
