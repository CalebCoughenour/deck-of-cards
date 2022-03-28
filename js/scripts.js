$(document).ready(function() {
  const cards = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
  const suits = [" of Hearts", " of Diamonds", " of Spades", " of Clubs"];
  
  let deck = [];


  suits.forEach(function(suits) {
    cards.forEach(function(cards) {
    deck.push(cards + suits)
    });
  });
  deck.forEach(function(card) {
    $("ul").append("<li>" + card + "</li>");
  });
});