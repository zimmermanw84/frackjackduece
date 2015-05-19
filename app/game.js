$ = require('jquery');

"use strict";

var testLogger = function() {
	$('body').append('<h1>YO</h1>');
};

module.exports = {
	test:testLogger
};
