var React = require('react');

"use strict";

// Top Parent Component
module.exports = React.createClass({
	render: function() {
		return(
			<div>
				<UserLogin Session={this.props.Session}/>
			</div>
		)
	}
});

var UserLogin = React.createClass({
	getInitialState: function() {
		return {
			showUser: {
				display: 'none'
			},
			form: {
				display: 'block'
			}
		}
	},
	handleFormSubmit: function(event) {
		event.preventDefault();
		var _this = this;
    var email = React.findDOMNode(this.refs.email).value.trim();
		this.props.Session.userSetter(email, 2000);
		this.setState({
			showUser: {
				display: 'block'
			},
			form: {
				display: 'none'
			}
		});
	},
	render: function() {
		var currentUserEmail = this.props.Session.CURRENT_USER ? this.props.Session.CURRENT_USER.email : '';
		var emailHash = this.props.Session.CURRENT_USER ? this.props.Session.CURRENT_USER.hash : '';
		var gravitar = "http://gravatar.com/avatar/" + emailHash + "?s=56";
		return(
			<div>
			<section style={this.state.showUser}>
				<h1>Hello! {currentUserEmail}</h1>
				<img src={gravitar} width="56" />
			</section>
			<section style={this.state.form}>
				<h1>Put your email in!</h1>
				<form onSubmit={this.handleFormSubmit}>
					<input type="text" placeholder="Email" ref="email" />
					<input type="submit" role="button" className="btn btn-primary" />
				</form>
			</section>
			</div>
		)
	}
});

