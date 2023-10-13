const renderGames = function (arrayofgames) {
  const row = document.getElementById("games-row");

  arrayofgames.forEach((game) => {
    const newcol = document.createElement("div");
    newcol.classList.add("col-12", "col-sm-6", "col-md-3");
    newcol.innerHTML = `
        <div class="card my-2">
        <img src=" ${game.imageUrl}" class="card-img-top" alt="game cover">
        <div class= "card-body"> 
        <h5 class= "card-title fw-bold"> ${game.name} </h5>
        <p class = "card-text"> ${game.description}</p>
        <p class = "card-text fst-italic">  ${game.brand}</p>
        <p class = "card text border-0"> ${game.price} €</p>
        <a href="./detail.html?gameId= ${game._id}" class="btn btn-success">Details</a>
        </div>
      </div>
                </div>
                `;
    row.appendChild(newcol);
  });
};

const getGames = function () {
  fetch("https://striveschool-api.herokuapp.com/api/product", {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTI4ZjFkNjEzOWM0MzAwMTg4MTQ1NjkiLCJpYXQiOjE2OTcxODIxNjcsImV4cCI6MTY5ODM5MTc2N30.JfiZzHIm0JhXzUA2F4WnXpXFRxV4RvNo9nq1s9ZOfVY",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("errore nel caricamento dei dati");
      }
    })

    .then((games) => {
      renderGames(games);
    })
    .catch((error) => {
      console.log("si è verificato un errore", error);
    });
};

getGames();
