// cashing the dom:

const playerScore = 26;
const opponentScore = 26;
const usercard_div = document.getElementById("player");
const opponentcard_div = document.getElementById("opponent");
const userScore_div = document.getElementById("player-score");
const opponentScore_div = document.getElementById("opponent-score");
const playButton_button = document.querySelector("button");
const statusBoars_span = document.getElementById('status-board');



document.getElementById("play-button").addEventListener("click", function(){
    console.log("Hello World");
  });


class DeckOfCards{
  constructor(){
    this.cards = [];
      const cardSuits = ['Diamonds','Spades','Clubs','Hearts'];
      const cardNumberValues = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
        for(let cardSuit in cardSuits){
          for(let cardNumberValue in cardNumberValues){
            this.cards.push(`${cardNumberValues[cardNumberValue]} of ${cardSuits[cardSuit]}`)
        }
      }
    }
  }

  const constructedDeckOfCards = new DeckOfCards();

  console.log(constructedDeckOfCards);
// class ShuffleDeckOfCards{
//   constructor(){
//         var a;
//         var b;
//         var c;
//         for (c = constructedDeckOfCards.length - 1; c > 0; c--) {
//             a = Math.floor(Math.random() * (c + 1));
//             b = a[c];
//             constructedDeckOfCards[c] = constructedDeckOfCards[a];
//             constructedDeckOfCards[a] = b;
//             b = this.unshuffledDeckOfCards;
//           }
//             return b;

//     }
//   }

// function ShuffleDeckOfCards(a){
//   const cards = this.cards;
//   for(let i = a.length - 1; i > 0; i--){
//     const j = Math.floor(Math.random() * (i + 1));
//     [a[i], a[j]] = [a[j], a[i]];
//   }
//   return this
// }

// var shuffled = ShuffleDeckOfCards(constructedDeckOfCards);

// console.log(shuffled);