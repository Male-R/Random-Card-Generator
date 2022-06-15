/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  cardGenerator();
};

let cardGenerator = () => {
  let arrNum = [
    "A",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let arrSuit = ["♦", "♥", "♠", "♣"];

  let random = arr => {
    let randomIndex = Math.floor(Math.random() * arr.length);
    let randomArrElement = arr[randomIndex];
    return randomArrElement;
  };

  let num = document.getElementById("value");
  num.innerHTML = random(arrNum);

  let symbol = document.querySelectorAll(".suit");
  let randomSymbol = random(arrSuit);
  symbol[0].innerHTML = randomSymbol;
  symbol[1].innerHTML = randomSymbol;

  if (randomSymbol == "♥" || randomSymbol == "♦") {
    document.querySelector(".card").style.color = "red";
  } else if (randomSymbol == "♠" || randomSymbol == "♣") {
    document.querySelector(".card").style.color = "black";
  }
};
