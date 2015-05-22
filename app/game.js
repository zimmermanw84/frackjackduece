var $ = require('jquery');
var	importedCards = require('./deck');
var Session = require('./session');

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

var DECK = [];
var PLAYER_HAND = [];
var DEALER_HAND = [];
var CURRENT_WAGER = 0;
var isHandOver = false;

var ACTIONTRACKER = {
	dealerTurn: false,
};

var actionComplete = function() {
	ACTIONTRACKER.dealerTurn = ACTIONTRACKER.dealerTurn ? false : true;
};

// Load Deck
var loadDeck = function() {
	for(var i = 0; i < importedCards.cardData.length; i++) {
		DECK[i] = importedCards.cardData[i];
	}
};

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

	hand.sort(function(a, b) {
 		return b.value-a.value;
	});

	for(var i = 0; i < hand.length; i++) {
		value += hand[i].value;

		// Soft Ace Case: version one. WIP. If Hand gets two ACE's it's 22
		if(hand[i].value === 0) {

			if(hand.length === 2 && value < 11) {
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
	actionComplete();
	
	while(getHandValue(DEALER_HAND) < 17) {
			DEALER_HAND.push( DECK.pop() );
	}	
};

var makeWager = function(user, wager) {
	user.score -= wager;
	CURRENT_WAGER += wager;
};

var isGameOver = function(user) {
	return user.score <= 0 || user.handCount >= 5 ? true : false; 
};

var endHand = function() {
	isHandOver = true;
};

var emptyBothHands = function() {
	var handWithMostCards = PLAYER_HAND > DEALER_HAND ? PLAYER_HAND : DEALER_HAND;

	for(var i = 0; i < handWithMostCards.length; i++) {
		PLAYER_HAND.pop();
		DEALER_HAND.pop();
	}

};

var resetGame = function() {
	actionComplete();
	loadDeck();
	emptyBothHands();
};


loadDeck();

// DRIVER TEST CODE
//shuffleDeck();
//dealCards();
//hitPlayer();
//hitPlayer();
//dealerAction();

// var user = Session.CURRENT_USER;
// console.log('isGameOver', isGameOver(user) );
// console.log('before wager', CURRENT_WAGER, user.score);
// makeWager(user, 1000);
// console.log('after wager', CURRENT_WAGER, user.score);
// user.handCount += 5;
// console.log('isGameOver', isGameOver(user) );

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
	resetGame: resetGame,
	DECK: DECK,
	ACTIONTRACKER: ACTIONTRACKER,
	actionComplete: actionComplete,
	isGameOver: isGameOver,
	isHandOver: isHandOver,
	makeWager: makeWager,
	CURRENT_WAGER: CURRENT_WAGER,
	endHand: endHand
};
