import "bootstrap";
import "./style.css";

const Icons = ["♥", "♠", "♦", "♣"];
const Colors = ["black", "red"];
const bottomSymbol = document.querySelector("#bottomSymbol");
const topSymbol = document.querySelector("#topSymbol");
const number = document.querySelector("#number");
const NUMBERS = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "J",
  "Q",
  "K",
  "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrK390SrRWw28bTSdvhl2iWF6Axx5nWUEOGQ&usqp=CAU' style='width: 250px; height: 250px;'>"
];
window.onload = function() {
  generateValue();
  document.querySelector("#button").addEventListener("click", event => {
    // Al hacer click hace un a nueva llamada y genera un nuevo valor
    generateValue();
  });
};
function randomElement(myArray) {
  return myArray[Math.floor(Math.random() * myArray.length)];
}
function generateValue() {
  let Symbol = randomElement(Icons);
  let Color = randomElement(Colors);
  let Number = randomElement(NUMBERS);
  topSymbol.innerHTML = Symbol;
  topSymbol.style.color = Color;
  bottomSymbol.innerHTML = Symbol;
  bottomSymbol.style.color = Color;
  number.innerHTML = Number;
  if (
    Number ==
    "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrK390SrRWw28bTSdvhl2iWF6Axx5nWUEOGQ&usqp=CAU' style='width: 250px; height: 250px;'>"
  ) {
    topSymbol.innerHTML = "";
    bottomSymbol.innerHTML = "";
  }
}
