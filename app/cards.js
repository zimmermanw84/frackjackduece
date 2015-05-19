$ = require('jquery');

"use strict";

var Deck = new Firebase('https://app-right.firebaseIO.com/deck');

var TEST_CARD_DATA = [
	{ id: 1, name: "test value", imgUrl: " test url "  },
	{ id: 2, name: "test value", imgUrl: " test url "  },
	{ id: 3, name: "test value", imgUrl: " test url "  },
	{ id: 4, name: "test value", imgUrl: " test url "  },
	{ id: 5, name: "test value", imgUrl: " test url "  }		
];

var cardDBLoader = function() {
	for (var i=0; i < TEST_CARD_DATA.length; i++) {
		Deck.set({ 
			id: TEST_CARD_DATA[i].id,
			name:  TEST_CARD_DATA[i].name,
			imgUrl:  TEST_CARD_DATA[i].imgUrl
		});
	}
};

var onComplete = function() {
	console.log("Success");
};

var emptyDeck = function() {
	Deck.remove(onComplete);
};

module.exports = {
	loadFirebase: cardDBLoadier,
	resetFirebase: emptyDeck, 
};