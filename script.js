"use strict";
/*
console.log(document.querySelector(".message").textContent); //in this tag we first access message element then access it's text.
document.querySelector(".message").textContent = " Correct number";
document.querySelector(".number").textContent = 10;
document.querySelector(".score").textContent = 20;
document.querySelector(".highscore").textContent = 100;
document.querySelector(".guess").value = 14;
*/

// console.log(document.querySelector(".again").textContent);

document.querySelector(".again").addEventListener("click", function () {
  let score = 20;
  document.querySelector(".message").textContent = "Start guessing";
  let SecretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = SecretNumber;
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = " ";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});

const SecretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  //When there is not any input
  if (!guess) {
    document.querySelector(".message").textContent = "No number";
  }
  //When player wins
  else if (guess === SecretNumber) {
    document.querySelector(".number").textContent = SecretNumber;
    document.querySelector(".message").textContent = "Correct Number";
    document.querySelector("body").style.backgroundColor = "#60b347"; //here we are not using (. dot) as body is not class.
    document.querySelector(".number").style.width = "30rem";
  }
  //when guess is too high
  else if (guess > SecretNumber) {
    if (score <= 0) {
      document.querySelector(".message").textContent = "You lose the game.";
    } else {
      document.querySelector("body").style.backgroundColor = "#222"; //here we are not using (. dot) as body is not class.
      document.querySelector(".message").textContent = "number is too high";
      score--;
      document.querySelector(".score").textContent = score;
    }
  }
  //when guess is too low
  else if (guess < SecretNumber) {
    if (score <= 0) {
      document.querySelector(".message").textContent = "You lose the game.";
    } else {
      document.querySelector("body").style.backgroundColor = "#222"; //here we are not using (. dot) as body is not class.
      document.querySelector(".message").textContent = "number is too low";
      score--;
      document.querySelector(".score").textContent = score;
    }
  }
});
