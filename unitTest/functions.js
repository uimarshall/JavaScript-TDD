// TEST RUNNER IS JEST
/** Most time we are going to be testing functions because functions produces output
and we want to assert or expect that the right output is produced*/
const functions = {
	add: (a, b) => {
		return a + b;
	},
	isNull: () => {
		return null;
	}
};

module.exports = functions;
