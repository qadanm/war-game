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
init();

class AudioController {
  constructor(){
    this.bgMusic = new Audio('assets/audio/bg-music.mp3');
    this.hoverCard = new Audio('assets/audio/card-hover.wav');
    this.losingSound = new Audio('assets/audio/loser.mp3');
    this.pointDown = new Audio('assets/audio/point-down.mp3');
    this.pointUp = new Audio('assets/audio/point-up.mp3');
    this.showCard = new Audio('assets/audio/show-card.wav');
    this.warSound = new Audio('assets/audio/war.mp3');
    this.winningSound = new Audio('assets/audio/win.mp3');
    this.bgMusic.volume = 0.4;
    this.bgMusic.loop = true;
  }
  startMusic(){
    this.bgMusic.play()
  }
  hoverOverCardSound(){
    this.hoverCard.play()
  }
  loserSound(){
    this.loserSound.play()
  }
  pointDownSound(){
    this.pointDown.play()
  }
  pointUpSound(){
    this.pointUp.play()
  }
  showCardSound(){
    this.showCard.play()
  }
  warSound(){
    this.warSound.play()
  }
  winningSound(){
    this.winningSound.play()
  }
}

class DeckOfCards{
  constructor(){
    this.cards = [];
      const cardSuits = ['d','s','c','h'];
      const cardNumberValues = ['A', "02", "03", "04", "05", "06", "07", "08", "09", "10", 'J', 'Q', 'K'];
        for(let cardSuit in cardSuits){
          for(let cardNumberValue in cardNumberValues){
            this.cards.push(`${cardSuits[cardSuit]}${cardNumberValues[cardNumberValue]}`)
        }
      }
    }
  }


let deck = new DeckOfCards();

var dealToPlayer = function(){
    var cards = Math.floor(Math.random() * deck.cards.length/2);
    return deck.cards.splice(cards, 1)[0];
  };
var dealToComputer = function(){
  var cards = Math.floor(Math.random() * deck.cards.length/2);
  return deck.cards.splice(cards, 1)[0];
  };

var playerHand = dealToPlayer();
var computerHand = dealToComputer();


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
    scoreElements[score].textConent = scores[score];
  }
}

function playRound(){
  this.audioController = new AudioController();
  this.audioController.showCardSound();
  resultElement.player.imageElement.classList.add(dealToPlayer(),"card");
  resultElement.computer.imageElement.classList.add(dealToComputer(),"card");
}