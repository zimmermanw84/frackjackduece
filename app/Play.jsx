var React = require('react');
var Game = require('./game');

"use strict";

// Top Parent Component
module.exports = React.createClass({
	render: function() {
		return(
			<div>
				<h1>Hello from play</h1>
				<BackButton/>
			</div>
		)
	}
});


var BackButton = React.createClass({
	render: function() {
		return(
			<a href="#" className="btn">Back</a>
		)
	}
});
