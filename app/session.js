var $ = require('jquery');
var UserStore = new Firebase('https://app-right.firebaseio.com/users');
var MD5 = require('MD5');

"use strict";

var CURRENT_USER = {
	email: null,
	score: 2000,
	handCount: 0,
	hash: null,
};

var saveCurrentUser = function() {
	// TODO: Find a viable solution for storing user data(scores) persistantly with unique key
};

var userSetter = function(email, score) {
	CURRENT_USER.email = email;
	CURRENT_USER.score = score;	
	CURRENT_USER.hash = MD5(email);
};

var updateUser = function(key, value) {
	CURRENT_USER[key] = value;
};

// userSetter('test@test.com', 2000);
// console.log(CURRENT_USER);

module.exports = {
	userSetter: userSetter,
	updateUser: updateUser,
	CURRENT_USER: CURRENT_USER
};
