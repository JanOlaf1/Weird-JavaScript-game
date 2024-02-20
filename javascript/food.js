
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
      text.innerText = "You're at the kebab spot, are you ready to satisfy those cravings. You have eaten an mouthwatering kebab! Delicious, right! The grill is fired up, and the options are endless. What's your next pick? ";
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
  
      text.innerText = "You're at the sushi haven, prepared to indulge those cravings. You've savored a delightful sushi roll – exquisite, isn't it? The chefs are ready to roll, and the options are aplenty. What's your next pick for a delectable experience? ";
    } else {
      text.innerText = "You don't have enough money. Go to work!";
    }
  }
export { Kebab, Sushi } ;