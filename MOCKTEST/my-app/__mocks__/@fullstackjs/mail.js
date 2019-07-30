// Mocking means giving a package a replacement, such that the test runner
// can look for the mocked package and use instead of the main package to increase speed of our test
// We don't want the Mail package to send mail again so that the test can be fast
// Basically we are mocking the node_modules
// The mock works exactly like the main package in 'models/Users.js' but does not send email
module.exports = class Mail {
	to() {
		return this;
	}

	subject() {
		return this;
	}

	data() {
		return this;
	}

	send() {
		return this;
	}
};
