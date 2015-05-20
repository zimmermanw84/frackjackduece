var React = require('react');

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
			React.render(<Play/>, document.getElementById('app'));
	}	
};

// Resolve route on hash change
window.onhashchange = resolveRoute;

// Resolve current route
resolveRoute();
