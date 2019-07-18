// TEST RUNNER IS JEST
/** Most time we are going to be testing functions because functions produces output
and we want to assert or expect that the right output is produced*/
const functions = {
	add: (a, b) => {
		return a + b;
	},
	isNull: () => {
		return null;
	},
	composeText: (name, age, sex) => {
		if (name == undefined && age == undefined && sex == undefined) {
			return undefined;
		}
		result = `${name} is a ${age} years old ${sex}`;
		return result;
	}
};

module.exports = functions;
