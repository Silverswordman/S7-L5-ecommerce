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

  fetch("https://striveschool-api.herokuapp.com/api/product", {
    method: "POST",
    body: JSON.stringify(newGame),
    headers: {
      "Content-type":"application/json",
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
