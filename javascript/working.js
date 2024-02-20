
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
function dishes() {
    if (energyAmount >= 5) {
      text.innerText = "You diligently wash a mountain of dishes. It's not the most glamorous job, but it pays the bills.";
      energyAmount -= 5;
      energy.innerText = energyAmount; 
      money += 10;
      moneyText.innerText = money;
      if (drunkenness > 10) {
        drunkenness -= 10;
      } else {
        drunkenness = 0;
      }
      drunkennessText.innerText = drunkenness.toFixed(2);
      if (hangoverLevel > 10) {
        hangoverLevel -= 10;
        hangoverText.innerText = hangoverLevel;
      }
    } else {
      text.innerText = "You have too little energy, go to sleep or eat.";
    }
  
    checkAndUpdateLevel();
  }
  
  function cleanHouse() {
    if (energyAmount >= 10) {
      energyAmount -= 10;
      energy.innerText = energyAmount; 
      text.innerText = "You spend hours cleaning and organizing every nook and cranny of your house. A tidy house is a happy house, right?";
      money += 15;
      moneyText.innerText = money;
      if (drunkenness > 10) {
        drunkenness -= 10;
      } else {
        drunkenness = 0;
      }
      drunkennessText.innerText = drunkenness.toFixed(2);
      if (hangoverLevel > 10) {
        hangoverLevel -= 10;
        hangoverText.innerText = hangoverLevel;
      }
      checkAndUpdateLevel();
    } else {
      text.innerText = "You have too little energy, go to sleep or eat.";
      checkAndUpdateLevel();
    }
  }
  
  function postman() {
    if (energyAmount >= 15) {
      text.innerText = "You embark on a journey to deliver newspapers to the farthest corners of the town. Extra cash and a good workout!";
      energyAmount -= 15;
      energy.innerText = energyAmount; 
      money += 20;
      moneyText.innerText = money;
      if (drunkenness > 5) {
        drunkenness -= 5;
      } else {
        drunkenness = 0;
      }
      drunkennessText.innerText = drunkenness.toFixed(2);
      if (hangoverLevel > 5) {
        hangoverLevel -= 5;
        hangoverText.innerText = hangoverLevel;
        checkAndUpdateLevel();
    } else {
      text.innerText = "You have too little energy, go to sleep or eat.";
    }
  }
}
function office() {
    if (energyAmount >= 20) {
      text.innerText = "You put in a hard day's work at the office, attending meetings and crunching numbers. The corporate life awaits.";
      energyAmount -= 20;
      energy.innerText = energyAmount; 
      money += 20;
      moneyText.innerText = money;
      if (drunkenness > 5) {
        drunkenness -= 5;
      } else {
        drunkenness = 0;
      }
      drunkennessText.innerText = drunkenness.toFixed(2);
      if (hangoverLevel > 5) {
        hangoverLevel -= 5;
        hangoverText.innerText = hangoverLevel;
      }
      checkAndUpdateLevel();
    } else {
      text.innerText = "You have too little energy, go to sleep or eat.";
    }
  }
  export { dishes, cleanHouse, office,postman};