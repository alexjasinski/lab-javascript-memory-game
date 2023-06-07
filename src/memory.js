class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;

    // add the rest of the class properties here
  }

  shuffleCards() {
    // ... write your code here
    const suffledArray = [];
    let total = 0;
    this.cards.forEach(function ())
    let shuffledCards =  * this.cards.length / this.cards.length;

  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pickedCards += 1;

    if (card1 === card2) {
      this.pairsGuessed += 1;
      return true;
    } else {
      return false;
    }
  }

  checkIfFinished() {
    // ... write your code here
    if ((pairsGuessed = cards.length / 2)) {
      const endMessage = document.createElement("p");
      endMessage.innerHTML = "Game Over";
      document.getElementById("score").appendChild(endMessage);
    }
  }
}
