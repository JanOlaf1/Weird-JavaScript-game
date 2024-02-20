
let drunkenness = 0;
let hangoverLevel = 0;
let money = 70;
let currentDrink = 0;
let drinksPurchased = 0; 
let energyAmount = 100;

const energy = document.querySelector("#energy");
const level = document.querySelector("#level");
const text = document.querySelector("#text");
const drunkennessText = document.querySelector("#drunkennessText");
const hangoverText = document.querySelector("#hangoverText");
const moneyText = document.querySelector("#moneyText");

function Kebab() {
    if (money >= 15) {
      money -= 15;
      moneyText.innerText = money;
      energyAmount += 10;
      energy.innerText = energyAmount;
      drunkenness -= 0.2;
      if (drunkenness < 0) {
        drunkenness = 0;
      } 
      drunkennessText.innerText = drunkenness;
      if (hangoverLevel > 2) {
        hangoverLevel -= 2;
        hangoverText.innerText = hangoverLevel;
      }
      text.innerText = "You enjoy a tasty kebab!";
    } else {
      text.innerText = "You don't have enough money. Go to work!";
    }
  }
  
  function Sushi() {
    if (money >= 10) {
      money -= 10;
      moneyText.innerText = money;
      energyAmount += 5;
      energy.innerText = energyAmount;
      drunkenness -= 0.1;
      if (drunkenness < 0) {
        drunkenness = 0;
      } 
      drunkennessText.innerText = drunkenness;
      if (hangoverLevel > 5) {
        hangoverLevel -= 5;
        hangoverText.innerText = hangoverLevel;
      }
  
      text.innerText = "You enjoy a delicious plate of sushi!";
    } else {
      text.innerText = "You don't have enough money. Go to work!";
    }
  }
export { Kebab, Sushi } ;