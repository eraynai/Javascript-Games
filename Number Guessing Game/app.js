//game variables

let mysteryNumber = 50;

//elements we grabbing
let button = document.querySelector("button");
let output = document.querySelector("#output");
let input = document.querySelector("#input");

button.addEventListener("click", numberCheck, false);

function numberCheck() {
  if (parseInt(input.value) === mysteryNumber) {
    output.innerHTML = "You Guessed The Right Number";
  } else if (parseInt(input.value) > mysteryNumber) {
    output.innerHTML = "You Guessed Too High";
  } else {
    output.innerHTML = "You Guessed Too Low";
  }
}

/* 
The user to input a number and when the button is pressed we can check wether the number inputed is the corrected. If it's too low or too high, I have the give user that feedback until they guess the correct number.

When the button is clicked, it runs the code which checks which number is in the input
*/
