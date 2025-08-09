let firstCard = Math.floor(Math.random()*10)+2; 
let secondCard = Math.floor(Math.random()*10)+2;
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

// 2. Create a startGame() function. Move the conditional
// below (line 11-20) inside the body of the function.
let messageEl = document.getElementById('message-el');
let SumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el');
function startGame(){
if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂";
    SumEl.textContent = 'Sum:'+ ""+sum;
    cardsEl.textContent = 'Cards: '+" " + firstCard+" " +secondCard;
} else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳"
    hasBlackJack = true
    SumEl.textContent = 'Sum:'+sum;
    cardsEl.textContent = 'Cards: '+" " + firstCard+" " +secondCard;

} else {
    message = "You're out of the game! 😭"
    isAlive = false
    SumEl.textContent = 'Sum:'+sum;
    cardsEl.textContent = 'Cards: '+" " + firstCard+" " +secondCard;

}
  messageEl.textContent = message;
console.log(messageEl.textContent);
}
function newCard(){
    console.log("Do you want to pick a new card?");
    let card = Math.floor(Math.random()*5)+1;
    sum += card;
    startGame();
    
}
