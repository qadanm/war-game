/*--------------------------------- constants ---------------------------------------*/ 
const usercard_div = document.getElementById("player");
const opponentcard_div = document.getElementById("opponent");
const playButton_button = document.querySelector("button");
var statusBoard_span = document.getElementById('status-board');
var replayButton = document.getElementById("replay-button");
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
/*--------------------------------------------- event listeners -------------------------------------*/
document.getElementById("play-button").addEventListener("click", playRound);
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
  warSoundSound(){
    this.warSound.play()
  }
  winningSound(){
    this.winningSound.play()
  }
}
cards = [];
const cardSuits = ['d','s','c','h'];
  const cardNumberValues = ["02", "03", "04", "05", "06", "07", "08", "09", "10", '11', '12', '13','14'];
    for(let cardSuit in cardSuits){
      for(let cardNumberValue in cardNumberValues){
        cards.push({
          value: cardNumberValues[cardNumberValue],
          suit: cardSuits[cardSuit]
        })
    }
  }
var playerHand = [];
var playerCard = [];
var computerHand = [];
var computerCard = [];
var idx;

while(cards.length>0){
    idx = Math.random()*cards.length;
    playerHand.push(cards.splice(idx,1)[0]);
    idx = Math.random()*cards.length;
    computerHand.push(cards.splice(idx,1)[0])
}
function checkWinner(){
  if(playerHand.length === 0 || computerHand.length === 0){
    if(playerHand.length > 0){
      statusBoard_span.innerHTML = "🎉🎊You Won!🤑🥁"
      replayButton.style = "visibility: visible;"
    }else{
      statusBoard_span.innerHTML = "🤬😕You Lost!💩🙊"
      replayButton.style = "visibility: visible;"
    }
  }
}
function dealToPlayer(){
  if (playerHand.length > 0) {
    playerCard = playerHand.shift();
    return playerCard;
  }
}
function dealToComputer(){
  if (computerHand.length > 0) {
    computerCard = computerHand.shift();
    return computerCard;
  }
}
function valueEvaluator(){
  warPile = [];
  if(playerHand.length > 0 || computerHand.length > 0) {
    if (parseInt(playerCard.value) > parseInt(computerCard.value)){
      playerHand.push(playerCard);
      playerHand.push(computerCard);
      warPile = computerHand.splice(0, 1);
      audioController = new AudioController();
      this.audioController.pointUpSound();
      checkWinner();
      console.log('checked to add points')
    }else if (parseInt(computerCard.value) > parseInt(playerCard.value)){
      computerHand.push(playerCard);
      computerHand.push(computerCard);
      warPile = playerHand.splice(0, 1);
      audioController = new AudioController();
      this.audioController.pointDownSound();
      checkWinner();
      console.log('checked to remove points')
    }else if (parseInt(playerCard.value) === parseInt(computerCard.value)){
      war();removeDisplayWar();checkWinner();
    }else if(playerHand.length === 0 || computerHand.length === 0){
      checkWinner();
    }
  }
}
function displayWar(){
  statusBoard_span.innerHTML = "WAR";
  document.body.style = "background-color: maroon; transition: background-color .75s ease-in-out;";
}
function removeDisplayWar(){
  setTimeout(function(){
  statusBoard_span.innerHTML = "🙃 😁 😜";
  document.body.style = "background-color: rgba(0, 18, 46, 0.76);"
},3000)}
function war(){
  displayWar();
  warPile = []
  warPile = computerHand.splice(0, 3);
  warPile = playerHand.splice(0, 3);
  this.audioController = new AudioController();
  this.audioController.warSoundSound();
}
function init(){
  scores = {
    player: scoreElements.player.innerHTML= 26,
    computer: scoreElements.computer.innerHTML= 26
  }
  results = {
    player: '',
    computer: ''
  }
  winner = null;
}
function render(){
  if(computerHand.length > 0 && playerHand.length > 0){
    console.log('Has rendered')
    resultElement.player.imageElement.classList.add(`${playerCard.suit}`+`${playerCard.value}`, "card");
    resultElement.computer.imageElement.classList.add(`${computerCard.suit}`+`${computerCard.value}`, "card");
    console.log(resultElement);
  }
}
function removeRender(){
  setTimeout(function(){
  resultElement.player.imageElement.classList.remove(`${playerCard.suit}`+`${playerCard.value}`, "card");
  resultElement.computer.imageElement.classList.remove(`${computerCard.suit}`+`${computerCard.value}`, "card");
},1000)}

function playRound(){
    this.audioController = new AudioController();
    this.audioController.showCardSound();
    dealToPlayer();
    dealToComputer();
    valueEvaluator();
    render();
    checkWinner();
    removeRender();
    scoreElements.player.innerHTML = playerHand.length;
    scoreElements.computer.innerHTML = computerHand.length;
}