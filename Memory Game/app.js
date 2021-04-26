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
  var cardsChosenId = [];

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
  function checkForMatch() {
    var cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
      alert("You found a match!");
    }
  }

  //flip your card
  function flipCard() {
    var cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosendId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});
