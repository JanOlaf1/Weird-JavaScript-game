
import { Partylevel } from './partylevel.js';
import { checkAndUpdateLevel } from './script.js'
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

function orderBeer() {
    if (money >= 5) {
      drunkenness += 0.1;
      drunkennessText.innerText = drunkenness;    
      hangoverLevel += 1;
      money -= 5;
      moneyText.innerText = money;
      hangoverText.innerText = hangoverLevel;
      drunkennessText.innerText = drunkenness.toFixed(2);
      text.innerText = "Beer, good choice! Bottoms up!";
      drinksPurchased++;
      checkAndUpdateLevel();
    } else {
      text.innerText = "You don't have enough money. Go to work!";
    }
  }
  
  function orderCocktail() {
    if (money >= 10) {
      drunkenness += 0.1;
      drunkennessText.innerText = drunkenness;
      hangoverLevel += 2;
      money -= 10;
      moneyText.innerText = money;
      hangoverText.innerText = hangoverLevel;
      text.innerText = "Cocktail time, cheers! What concoction would you like to order next? The mixologist is at your service. What's your pleasure?";

      drinksPurchased++;
      checkAndUpdateLevel();
    } else {
      text.innerText = "You don't have enough money. Go to work!";
    }
  } 
  
  function drinkingGame() {
    if (money >= 40) {
      drunkenness += 0.1;
      drunkennessText.innerText = drunkenness;       
       hangoverLevel += 10; 
        money -= 40;
        moneyText.innerText = money;
        hangoverText.innerText = hangoverLevel;
        text.innerText = "Now we're kickin' it! Time for some spirited fun! You find yourself in the midst of a drinking game. Let the good times roll! What are you doing next? ";

        level.innerText = `Level: ${Partylevel[currentDrink].level}, ${Partylevel[currentDrink].name}`;
        currentDrink++;
        drinksPurchased++;
        checkAndUpdateLevel();
    } else {
        text.innerText = "You don't have enough money. Go to work!";
      }
  }
  export { orderBeer, orderCocktail, drinkingGame };