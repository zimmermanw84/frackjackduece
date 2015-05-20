var React = require('react');
var Game = require('./game');

var DECK = require('./deck').cardData;
var PLAYER_HAND = Game.PLAYER_HAND;
var DEALER_HAND = Game.DEALER_HAND;

"use strict";

// console.log('game', Game);
// console.log('PLAYER_HAND', PLAYER_HAND);
// Game.shuffleDeck();
// console.log(DECK);


// Top Parent Component
module.exports = React.createClass({
	startGame: function() {
		Game.shuffleDeck();
		Game.dealCards();
	},
	render: function() {
		return(
			<div>
				<h1>Play</h1>
				<StartGame startGame={this.startGame} />
				<BackButton/>
			</div>
		)
	}
});

var GameComponent = React.createClass({
	render: function() {
		return(
			<div>
				<DealerHand/>
				<PlayerHand/>
				<BackButton/>
				<StandardGameControls/>
			</div>
		)
	}
});

var DealerHand = React.createClass({
	render: function() {
		return(
			<div>
				<h1>Dealer Hand</h1>
				<h2>{Game.getHandValue(DEALER_HAND)}</h2>
				<ul>
					{DEALER_HAND.map(function(card) {
						return <li key={card.id}>
											Name: {card.name}		
									 </li>
					})}
				</ul>
			</div>		
		)
	}
});

var PlayerHand = React.createClass({
	render: function() {
		return(
			<div>
				<h1>Player Hand</h1>
				<h2>{Game.getHandValue(PLAYER_HAND)}</h2>				
				<ul>
					{PLAYER_HAND.map(function(card) {
						return <li key={card.id}>
											Name: {card.name}		
									 </li>
					})}
				</ul>
			</div>		
		)
	}
});

var StartGame = React.createClass({
	hideButtonOnClick: function() {
		this.props.startGame();
		this.setState({display:'none'});
		React.render(<GameComponent/>, document.getElementById('app'));
	},
	render: function() {
		return(
			<button style={this.state} onClick={this.hideButtonOnClick} className="btn-success">Start Game</button>
		)
	}
});

var StandardGameControls = React.createClass({
	hitPlayer: function() {
		Game.hitPlayer();
		React.render(<GameComponent/>, document.getElementById('app'));
	},
	render: function() {
		return(
			<div>
				<button onClick={this.hitPlayer} className="btn-danger">Hit Me!</button>
				<button className="btn-info">Stay</button>
			</div>
		)
	}
});

var BackButton = React.createClass({
	render: function() {
		return(
			<a href="#" className="btn btn-warning" role="button">Back</a>
		)
	}
});

