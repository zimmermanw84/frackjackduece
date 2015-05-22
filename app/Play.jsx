var $ = require('jquery');
var React = require('react');
var Login = require('./login.jsx');

"use strict";

// Top Parent Component
module.exports = React.createClass({

	render: function() {
		return(
			<div>
				<Login Session={this.props.Session}/>
				<GameComponent Session={this.props.Session} Game={this.props.Game} DECK={this.props.DECK} />
			</div>
		)
	}
});

var GameComponent = React.createClass({
	getInitialState: function() {
		return {
			gameControls: {
				display: 'none'
			}
		}
	},
	startGame: function() {
		this.props.Game.shuffleDeck();
		this.props.Game.dealCards();
		this.setState({
			gameControls: {
				display: 'block'
			}
		});
	},
	hitPlayer: function() {
		this.props.Game.hitPlayer();
		this.setState({});
	},
	dealerAction: function() {
		this.props.Game.dealerAction();
		this.props.Game.actionComplete();
		this.setState({});
	},
	resetGame: function() {
		this.props.Game.resetGame();
		this.startGame();
	},
	render: function() {
		var _this = this;
		return(
			<div>
					<StartGame startGame={this.startGame} score={this.props.Session.CURRENT_USER.score} />
					<h2>Card Count: {this.props.Game.DECK.length}</h2>
					<h2>{this.props.Game.getHandValue(_this.props.Game.DEALER_HAND)}</h2>
					<DealerHand DEALER_HAND={this.props.Game.DEALER_HAND} isDealerAction={this.props.Game.ACTIONTRACKER.dealerTurn} />
					<h2>{this.props.Game.getHandValue(_this.props.Game.PLAYER_HAND)}</h2>
					<PlayerHand PLAYER_HAND={this.props.Game.PLAYER_HAND}/>
				<section style={this.state.gameControls}>
					<StandardGameControls hit={this.hitPlayer} dealerAction={this.dealerAction} resetGame={this.resetGame} />
				</section>
			</div>
		)
	}
});

var DealerHand = React.createClass({
	getInitalState: function() {
		return {
		}
	},
	render: function() {
		var _this = this;
		var cardsShowing = [];

		for(var i = 0; i < (_this.props.DEALER_HAND.length - 1); i++) {
			cardsShowing[i] = _this.props.DEALER_HAND[i+1];	
		}

		return(
			<div>
				<h1>Dealer Hand</h1>
				<ul>
					<DealerDownCard downCard={this.props.DEALER_HAND[0]} isDealerAction={this.props.isDealerAction} />
					{cardsShowing.map(function(card) {
					return <li>
										<Card value={card.value} name={card.name} id={card.id} />
								</li>
					})}
				</ul>
			</div>		
		)
	}
});

var PlayerHand = React.createClass({
	getInitialState: function() {
		return {
		}
	},
	render: function() {
		var _this = this;
		return(
			<div>
				<h1>Player Hand</h1>
				<ul>
				{_this.props.PLAYER_HAND.map(function(card) {
					return <li>
										<Card value={card.value} name={card.name} id={card.id} />
								</li>
					})}
				</ul>
			</div>		
		)
	}
});

var DealerDownCard = React.createClass({
	render: function() {
		var downCardName = this.props.downCard == undefined ? "" : this.props.downCard.name;
		console.log(this.props.isDealerAction)
		return(
			<div>
				<li>{this.props.isDealerAction ? downCardName : "DOWN CARD"}</li>
			</div>
		)
	}
});

var Card = React.createClass({
	render: function() {
		return(
			<div  key={this.props.id}>
	 			Name: {this.props.name}		
			</div>
		)	
	}
});

var StartGame = React.createClass({
	getInitialState: function() {
		return {
			startButton: {
				display: 'block'
			},
			score: {
				display: 'none'
			}
		}
	},
	hideButtonOnClick: function() {
		this.props.startGame();
		this.setState({
			startButton: {
				display: 'none'
			},
			score: {
				display: 'block'
			}
		});
	},
	render: function() {
		return(
			<div>
				<section style={this.state.score}>
					<h2>Bankroll: {this.props.score}</h2>
				</section>
				<button style={this.state.startButton} onClick={this.hideButtonOnClick} className="btn-success">Start Game</button>
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

var StandardGameControls = React.createClass({
	getInitialState: function() {
		return {
			hitStay: {
				display: 'inline-block'
			},
			nextHand: {
				display: 'none'
			},
		}
	},
	hitPlayer: function() {
		this.props.hit();
	},
	stayPlayer: function() {
//		this.props.resolveAction();
		this.props.dealerAction();
		this.setState({
			hitStay: {
				display: 'none'
			},
			nextHand: {
				display: 'block'
			}
		});	
	},
	resetHand: function() {
		this.props.resetGame();
		this.setState({
			hitStay: {
				display: 'block'
			},
			nextHand: {
				display: 'none'
			}
		});	
	},
	render: function() {
		return(
			<div>
				<button style={this.state.hitStay} onClick={this.hitPlayer} className="btn-danger">Hit Me!</button>
				<button style={this.state.hitStay} onClick={this.stayPlayer} className="btn-info">Stay</button>
				<button style={this.state.nextHand} onClick={this.resetHand} className="btn-primary">Next Hand</button>
			</div>
			
		)
	}
});

