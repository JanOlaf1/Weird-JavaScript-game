
const quotes = [
"The only way to do great work is to love what you do.",
"In the midst of chaos, there is also opportunity.",
"Success is not final, failure is not fatal: It is the courage to continue that counts.",
"Don't watch the clock; do what it does. Keep going.",
"Believe you can and you're halfway there.",
"The future belongs to those who believe in the beauty of their dreams.",
"Strive not to be a success, but rather to be of value.",
"You miss 100% of the shots you don't take.",
"Success is stumbling from failure to failure with no loss of enthusiasm.",
"The only limit to our realization of tomorrow will be our doubts of today.",
"It always seems impossible until it's done.",
"Your time is limited, don't waste it living someone else's life.",
"If you want to lift yourself up, lift up someone else.",
"The only person you are destined to become is the person you decide to be.",
"To live a creative life, we must lose our fear of being wrong.",
"Do not wait to strike till the iron is hot, but make it hot by striking.",
"Do what you can, where you are, with what you have.",
"The best way to predict the future is to create it.",
"Do not wait for leaders; do it alone, person to person.",
"The only limit to our realization of tomorrow will be our doubts of today.",
"Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
"It is never too late to be what you might have been.",
"Happiness is not something ready made. It comes from your own actions.",
"The only journey is the one within.",
"Whatever you are, be a good one.",
"To be the best, you must be able to handle the worst.",
"The only person you are destined to become is the person you decide to be.",
"In three words I can sum up everything I've learned about life: it goes on.",
"The only way to achieve the impossible is to believe it is possible.",
"I find that the harder I work, the more luck I seem to have.",
"The only place where success comes before work is in the dictionary.",
"You are never too old to set another goal or to dream a new dream.",
"Your attitude, not your aptitude, will determine your altitude.",
"Success is not in what you have, but who you are.",
"The only limit to our realization of tomorrow will be our doubts of today.",
"Don't count the days, make the days count.",
"If you want to achieve greatness stop asking for permission.",
"The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
"You miss 100% of the shots you don't take.",
"The best way to predict the future is to create it.",
"Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
"It is never too late to be what you might have been.",
"Happiness is not something ready made. It comes from your own actions.",
"The only journey is the one within.",
"Whatever you are, be a good one.",
"To be the best, you must be able to handle the worst.",
"The only person you are destined to become is the person you decide to be.",
"In three words I can sum up everything I've learned about life: it goes on.",
"The only way to achieve the impossible is to believe it is possible.",
"I find that the harder I work, the more luck I seem to have.",
"The only place where success comes before work is in the dictionary.",
"You are never too old to set another goal or to dream a new dream.",
"Your attitude, not your aptitude, will determine your altitude.",
"Success is not in what you have, but who you are.",
"The only limit to our realization of tomorrow will be our doubts of today.",
"Don't count the days, make the days count.",
"If you want to achieve greatness stop asking for permission.",
"The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
"You miss 100% of the shots you don't take.",
"The best way to predict the future is to create it.",
"Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
"It is never too late to be what you might have been.",
"Happiness is not something ready made. It comes from your own actions.",
"The only journey is the one within.",
"Whatever you are, be a good one.",
"To be the best, you must be able to handle the worst.",
"The only person you are destined to become is the person you decide to be.",
"In three words I can sum up everything I've learned about life: it goes on.",
"The only way to achieve the impossible is to believe it is possible.",
"I find that the harder I work, the more luck I seem to have.",
"The only place where success comes before work is in the dictionary.",
"You are never too old to set another goal or to dream a new dream.",
"Your attitude, not your aptitude, will determine your altitude.",
"Success is not in what you have, but who you are.",
"The only limit to our realization of tomorrow will be our doubts of today.",
"Don't count the days, make the days count.",
"If you want to achieve greatness stop asking for permission.",
"The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
"You miss 100% of the shots you don't take.",
"The best way to predict the future is to create it.",
"Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
"It is never too late to be what you might have been.",
"Happiness is not something ready made. It comes from your own actions.",
"The only journey is the one within.",
"Whatever you are, be a good one.",
"To be the best, you must be able to handle the worst.",
"The only person you are destined to become is the person you decide to be.",
"In three words I can sum up everything I've learned about life: it goes on.",
"The only way to achieve the impossible is to believe it is possible.",
"I find that the harder I work, the more luck I seem to have.",
"The only place where success comes before work is in the dictionary.",
"You are never too old to set another goal or to dream a new dream.",
"Your attitude, not your aptitude, will determine your altitude.",
"Success is not in what you have, but who you are.",
"The only limit to our realization of tomorrow will be our doubts of today.",
"Don't count the days, make the days count.",
"If you want to achieve greatness stop asking for permission.",
"The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
"You miss 100% of the shots you don't take.",
"The best way to predict the future is to create it."
  ];
  
let quoteCounter = 0;

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
    if (++quoteCounter % 4 === 0) {
    revealEasterEgg();
  }
  
  return randomQuote;
}
function revealEasterEgg() {
    console.log("Easter Egg: You found the secret!");
    //bigger easter egg on devlopment.
}
  


  
  export { generateRandomQuote };  