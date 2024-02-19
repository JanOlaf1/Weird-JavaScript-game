import { generateRandomQuote } from './quoteGenerator.js';
import { Partylevel } from './partylevel.js';
let drunkenness = 0;
let hangoverLevel = 0;
let money = 70;
let currentDrink = 0;
let drinksPurchased = 0; 
let energyAmount = 100;

const locations = [
  {
    name: "Bar counter",
    "button text": ["Order a beer", "Order a cocktail", "Challenge to a drinking game", "Go to eat", "Go back home"],
    "button functions": [orderBeer, orderCocktail, drinkingGame, goToEat, goBack],
    text: "Damn you party animal, welcome to the bar! So you are at the bar counter.. What would you like to do?"
  },
  {
    name: "Restaurant",
    "button text": ["Sushi", "Kebab", "Order a beer", "Go to work", "go back home"],
    "button functions": [Sushi, Kebab, orderBeer, performWork, goBack],
    text: "Are you hungry? Lil Chef greets you! Bon Appetit! What do you want to do? "
  },
      {
          name: "work",
          "button text": ["Do Dishes", "Clean the House", "Deliver Newspapers", "Work at the Office", "Go back home"],
          "button functions": [dishes, cleanHouse, postman, office, goBack],
          text: "Responsibility first, am i right? You are at work.. What would you like to do?"
        },
        {
          name: "Back to the apartment",
          "button text": ["Go to bar", "Go to eat", "Go to work", "Go to sleep", "Random Quote Generator!"],
          "button functions": [goBarCounter, goToEat, performWork, sleep, quotes],
          text: "Damn you party animal, welcome to the bar! So you are at the bar counter.. What would you like to do?"
        },
  /*
  {
    name: "pass out",
    "button text": ["Recover at home", "Recover at home", "Recover at home"],
    "button functions": [orderBeer, orderCocktail, drinkingGame, goToEat, ],
    text: "You had a wild night. Time to recover from the hangover at home."
  },
  {
    name: "bar fight",
    "button text": ["", "", ""],
    "button functions": [orderBeer, orderCocktail, drinkingGame, goToEat, ],
    text: "A bar fight breaks out. What's your move? Use the buttons above."
  },
  {
    name: "victory",
    "button text": ["", "", ""],
    "button functions": [orderBeer, orderCocktail, drinkingGame, goToEat, ],
    text: 'You win the drinking game! Cheers to your victory! 🎉'
  },
  {
    name: "defeat",
    "button text": ["", "", ""],
    "button functions": [orderBeer, orderCocktail, drinkingGame, goToEat, ],
    text: "You couldn't handle the drinks. 💀"
  } */
];

const button1 = document.querySelector('#button1');
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const button5 = document.querySelector("#button5");
const energy = document.querySelector("#energy");
const level = document.querySelector("#level");
const text = document.querySelector("#text");
const drunkennessText = document.querySelector("#drunkennessText");
const hangoverText = document.querySelector("#hangoverText");
const moneyText = document.querySelector("#moneyText");



function update(location) {

  button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button3.innerText = location["button text"][2];
  button4.innerText = location["button text"][3];
  button5.innerText = location["button text"][4];

  button1.onclick = location["button functions"][0];
  button2.onclick = location["button functions"][1];
  button3.onclick = location["button functions"][2];
  button4.onclick = location["button functions"][3];
  button5.onclick = location["button functions"][4];

  text.innerHTML = location.text;
}

button1.onclick = goBarCounter;
button2.onclick = goToEat;
button3.onclick = performWork;
button4.onclick = sleep;
button5.onclick = quotes;

function quotes() {
  const randomQuote = generateRandomQuote();
  alert(randomQuote);
}
function goBack() {
  update(locations[3]);

}


function goBarCounter() {
  update(locations[0]);
}
function sleep(){

}

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


function performWork() {
  update(locations[2]);

}

function goToEat() {
  update(locations[1]);
}


function checkAndUpdateLevel() {
  if (drinksPurchased >= 3 && currentDrink < Partylevel.length) {
    const nextLevel = Partylevel[currentDrink];
    level.innerText = `Level ${nextLevel.level}, ${nextLevel.name}`;
    energy.innerText = energyAmount; 
    currentDrink++;
    drinksPurchased = 0;
  } 
}

function orderBeer() {
  if (money >= 5) {
    drunkenness += 0.1;
    drunkennessText.innerText = drunkenness;    
    hangoverLevel += 1;
    money -= 5;
    moneyText.innerText = money;
    hangoverText.innerText = hangoverLevel;
    drunkennessText.innerText = drunkenness.toFixed(2);

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

    drinksPurchased++;
    checkAndUpdateLevel();
  } else {
    text.innerText = "You don't have enough money. Go to work!";
  }
} 
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
    }
    checkAndUpdateLevel();
  } else {
    text.innerText = "You have too little energy, go to sleep or eat.";
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

  function drinkingGame() {
    if (money >= 40) {
      drunkenness += 0.1;
      drunkennessText.innerText = drunkenness;       
       hangoverLevel += 10; 
        money -= 40;
        moneyText.innerText = money;
        hangoverText.innerText = hangoverLevel;

        level.innerText = `Level: ${Partylevel[currentDrink].level}, ${Partylevel[currentDrink].name}`;
        currentDrink++;
        drinksPurchased++;
        checkAndUpdateLevel();
    } else {
        text.innerText = "You don't have enough money. Go to work!";
      }
  }
  function passout(){
    
  }