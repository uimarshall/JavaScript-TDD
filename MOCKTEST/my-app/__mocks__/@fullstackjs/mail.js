// We don't want the Mail opackage to send mail again so that the test can be fast
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
