var $ = require('jquery');
var	importedCards = require('./deck');

"use strict";

// Sudo
// Retireve and store all cards from DB : Shuffle
// Deal player and dealer hand
// Get player and dealer hand value
// Check dealer and Player hand value for blackjack
// Check hand for split and double : Split my be more in React
// Player action logic - Hit or stay - stand on 17 - When finished go to dealer action
// Declare winner
// Wagering
// Game is over when current user's bankroll is 0

var DECK = importedCards.cardData;
var PLAYER_HAND = [];
var DEALER_HAND = [];

var shuffleDeck = function() { 
  for(var j, x, i = DECK.length; i; j = Math.floor(Math.random() * i), x = DECK[--i], DECK[i] = DECK[j], DECK[j] = x);
  return DECK;
};

var dealCards = function() {
	for(var i = 0; i < 2; i++) {
		PLAYER_HAND[i] = DECK.pop();
		DEALER_HAND[i] = DECK.pop();
	}
};

var getHandValue = function(hand) {
	var value = 0;

	hand.sort(function(a, b){
 		return b.value-a.value;
	});

	for(var i = 0; i < hand.length; i++) {
		value += hand[i].value;

		// Soft Ace Case: version one. WIP
		if(hand[i].value === 0) {

			if(hand.length === 2) {
				value += 11;
			} else if(value > 21) {
				value += 1;
			} else if(value <= 10) {
				value += 11;
			}	else {
				value += 1;
			}
		}
	}
	return value;
};

var hitPlayer = function() {
	PLAYER_HAND.push( DECK.pop() );
};

var dealerAction = function() {
	while(getHandValue(DEALER_HAND) <= 17) {
		DEALER_HAND.push( DECK.pop() );
	}	
};

//shuffleDeck();
//dealCards();
//hitPlayer();
//hitPlayer();
//dealerAction();

// console.log("Deck count" ,DECK.length );
// console.log("player", PLAYER_HAND);
// console.log("dealer", DEALER_HAND);
// console.log("player val", getHandValue(PLAYER_HAND) );
// console.log("Dealer val", getHandValue(DEALER_HAND) );

module.exports = {
	hitPlayer: hitPlayer,
	dealerAction: dealerAction,
	getHandValue: getHandValue,
	dealCards: dealCards,
	shuffleDeck: shuffleDeck,
	PLAYER_HAND: PLAYER_HAND,
	DEALER_HAND: DEALER_HAND,
};
