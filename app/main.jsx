var React = require('react');
var Game = require('./game');
var DECK = require('./deck').cardData;
var Session = require('./session');

// We create a function that will lazy load modules based on the current hash
var resolveRoute = function () {
  
  // If no hash or hash is '#' we lazy load the Home component
  if (!location.hash || location.hash.length === 1) {
    require.ensure([], function () {
      var Home = require('./Home.jsx');
      React.render(<Home/>, document.getElementById('app'));
    });
  } else if (location.hash === '#play') {
			var Play = require('./Play.jsx');
			React.render(<Play Session={Session} Game={Game} DECK={DECK} />, document.getElementById('app'));
	}	
};

// Resolve route on hash change
window.onhashchange = resolveRoute;

// Resolve current route
resolveRoute();
