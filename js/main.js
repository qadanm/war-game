/*--------------------------------- constants ---------------------------------------*/ 

const usercard_div = document.getElementById("player");
const opponentcard_div = document.getElementById("opponent");
const playButton_button = document.querySelector("button");
const statusBoard_span = document.getElementById('status-board');

//--------------------------------------application state var------------------------------------------

let scores, winner

/*--------------------------------------- cached element references -------------------------------------------*/

const scoreElements = {
  player: document.getElementById("player-score"),
  computer: document.getElementById("opponent-score")
}
const resultElement = {
  player: {
    imageElement: document.getElementById("player-card")
  },
  computer: {
    imageElement: document.getElementById("opponent-card")
  }
}

resultElement.player.imageElement

/*--------------------------------------------- event listeners -------------------------------------*/

document.getElementById("play-button").addEventListener("click", playRound)

/*----------------------------------------- functions --------------------------------------------------------*/

class DeckOfCards{
  constructor(){
    this.cards = [];
      const cardSuits = ['d','s','c','h'];
      const cardNumberValues = ['a', "02", "03", "04", "05", "06", "07", "08", "09", "10", 'j', 'q', 'k'];
        for(let cardSuit in cardSuits){
          for(let cardNumberValue in cardNumberValues){
            this.cards.push(`${cardSuits[cardSuit]}${cardNumberValues[cardNumberValue]}`)
        }
      }
    }
  }



let deck = new DeckOfCards();
console.log(deck)

function init(){
  scores = {
    player: 26,
    computer: 26
  }
  results = {
    player: '',
    computer: ''
  }
  winner = null;
}

function render(){
  for(let score in scores){

  }
}

function playRound(){
  resultElement.player.imageElement.classList.add(deck[Math.floor(Math.random()*deck.length)]);
}

console.log(DeckOfCards.cards[Math.floor(Math.random() * DeckOfCards.cards.length)])