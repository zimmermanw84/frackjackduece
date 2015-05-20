// Basiclly just a seed file
// TODO: Add urls. WebPack PNG data.
// Might just Use firebase for user info

"use strict";

var Deck = new Firebase('https://app-right.firebaseIO.com/deck');

var CARD_DATA = [
	{ name: "Duece of Club", imgUrl: " test url ", value: 2 },
	{ name: "Three of Club", imgUrl: " test url ", value: 3 },
	{ name: "Four of Club", imgUrl: " test url ", value: 4 },
	{ name: "Five of Club", imgUrl: " test url ", value: 5 },
	{ name: "Six of Club", imgUrl: " test url ", value: 6 },
	{ name: "Seven of Club", imgUrl: " test url ", value: 7 },
	{ name: "Eight of Club", imgUrl: " test url ", value: 8 },
	{ name: "Nine of Club", imgUrl: " test url ", value: 9 },
	{ name: "Ten of Club", imgUrl: " test url ", value: 10 },
	{ name: "Jack of Club", imgUrl: " test url ", value: 10 },
	{ name: "Queen of Club", imgUrl: " test url ", value: 10 },
	{ name: "King of Club", imgUrl: " test url ", value: 10 },
	{ name: "Ace of Club", imgUrl: " test url ", value: 0 },
	{ name: "Duece of Heart", imgUrl: " test url ", value: 2 },
	{ name: "Three of Heart", imgUrl: " test url ", value: 3 },
	{ name: "Four of Heart", imgUrl: " test url ", value: 4 },
	{ name: "Five of Heart", imgUrl: " test url ", value: 5 },
	{ name: "Six of Heart", imgUrl: " test url ", value: 6 },
	{ name: "Seven of Heart", imgUrl: " test url ", value: 7 },
	{ name: "Eight of Heart", imgUrl: " test url ", value: 8 },
	{ name: "Nine of Heart", imgUrl: " test url ", value: 9 },
	{ name: "Ten of Heart", imgUrl: " test url ", value: 10 },
	{ name: "Jack of Heart", imgUrl: " test url ", value: 10 },
	{ name: "Queen of Heart", imgUrl: " test url ", value: 10 },
	{ name: "King of Heart", imgUrl: " test url ", value: 10 },
	{ name: "Ace of Heart", imgUrl: " test url ", value: 0 },
	{ name: "Duece of Diamond", imgUrl: " test url ", value: 2 },
	{ name: "Three of Diamond", imgUrl: " test url ", value: 3 },
	{ name: "Four of Diamond", imgUrl: " test url ", value: 4 },
	{ name: "Five of Diamond", imgUrl: " test url ", value: 5 },
	{ name: "Six of Diamond", imgUrl: " test url ", value: 6 },
	{ name: "Seven of Diamond", imgUrl: " test url ", value: 7 },
	{ name: "Eight of Diamond", imgUrl: " test url ", value: 8 },
	{ name: "Nine of Diamond", imgUrl: " test url ", value: 9 },
	{ name: "Ten of Diamond", imgUrl: " test url ", value: 10 },
	{ name: "Jack of Diamond", imgUrl: " test url ", value: 10 },
	{ name: "Queen of Diamond", imgUrl: " test url ", value: 10 },
	{ name: "King of Diamond", imgUrl: " test url ", value: 10 },
	{ name: "Ace of Diamond", imgUrl: " test url ", value: 0 },
	{ name: "Duece of Spade", imgUrl: " test url ", value: 2 },
	{ name: "Three of Spade", imgUrl: " test url ", value: 3 },
	{ name: "Four of Spade", imgUrl: " test url ", value: 4 },
	{ name: "Five of Spade", imgUrl: " test url ", value: 5 },
	{ name: "Six of Spade", imgUrl: " test url ", value: 6 },
	{ name: "Seven of Spade", imgUrl: " test url ", value: 7 },
	{ name: "Eight of Spade", imgUrl: " test url ", value: 8 },
	{ name: "Nine of Spade", imgUrl: " test url ", value: 9 },
	{ name: "Ten of Spade", imgUrl: " test url ", value: 10 },
	{ name: "Jack of Spade", imgUrl: " test url ", value: 10 },
	{ name: "Queen of Spade", imgUrl: " test url ", value: 10 },
	{ name: "King of Spade", imgUrl: " test url ", value: 10 },
	{ name: "Ace of Spade", imgUrl: " test url ", value: 0 },
];

// Add unique ID for React Key

for(var i = 0; i < CARD_DATA.length; i++) {
	CARD_DATA[i].id = (i + 1);
};

var cardDBLoader = function() {
		Deck.set(CARD_DATA); 
};

var emptyDeck = function() {
	Deck.remove();
};

module.exports = {
	loadFirebase: cardDBLoader,
	resetFirebase: emptyDeck,
	cardData:CARD_DATA
};
