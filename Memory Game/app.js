document.addEventListener("DOMContentLoaded", () => {
  //card options
  const cardArray = [
    {
      name: "bat",
      img: "img/bat.png",
    },
    {
      name: "bird",
      img: "img/bird.png",
    },
    {
      name: "bunny",
      img: "img/bird.png",
    },
    {
      name: "cat",
      img: "img/cat.png",
    },
    {
      name: "fish",
      img: "img/fish.png",
    },
    {
      name: "frog",
      img: "img/frog.png",
    },
    {
      name: "kangaroo",
      img: "img/kangaroo.png",
    },
    {
      name: "pig",
      img: "img/pig.png",
    },
  ];

  const grid = document.querySelector(".grid");
  var cardsChosen = [];

  //create the board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "img/blank.png");
      card.setAttribute("data-id", i);
      /* card.addEventListener('click', flipCard()); */
      grid.appendChild(card);
    }
  }

  //check for matches

  //flip your card
  function flipCard() {
    var cardId = this.getAttribute("data-id");
  }

  createBoard();
});
