//Created variables
const btnPizza = document.querySelector("#btnPizza");
const btnBurger = document.querySelector("#btnBurger");
const btnPasta = document.querySelector("#btnPasta");
const container = document.querySelector(".container");
const containerBtn = document.querySelector(".containerBtn");
const bodyContent = document.querySelector(".bodyContent");

//Fetched the foodish API
const foodImages = async (a, b) => {
  const response = await fetch(
    `https://foodish-api.herokuapp.com/images/${a}${b}.jpg`
  );

  cards = document.createElement("div");
  container.classList.add("cards");

  //innerHtml to get image
  container.innerHTML = `
    <div class= "cards">
    <img src=${response.url} alt=${response.img}>
    </div>`;
  cards.append(cards);
};

//Get random pizza images
const pizzaRandom = () => {
  const pizza = "pizza/pizza";
  let numPizza = Math.floor(Math.random() * 94 + 1);
  return foodImages(pizza, numPizza);
};
btnPizza.addEventListener("click", pizzaRandom);


//Get random pasta images
const pastaRandom = () => {
  const pasta = "pasta/pasta";
  let numPasta = Math.floor(Math.random() * 33 + 1);
  return foodImages(pasta, numPasta);
};
btnPasta.addEventListener("click", pastaRandom);


//Get random burger images
const burgerRandom = () => {
  const burger = "burger/burger";
  let numBurger = Math.floor(Math.random() * 86 + 1);
  return foodImages(burger, numBurger);
};
burgerRandom();
btnBurger.addEventListener("click", burgerRandom);
