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
	},

	factorsOfNum: n => {
		var factors = [];
		for (var i = 1; i <= n; i++) {
			if (n / i === Math.floor(n / i)) {
				factors.push(i);
			}
		}
		return factors;
	},
	createUser: () => {
		const user = { firstName: "Marshall" };
		user["lastName"] = "Ansel";
		return user;
	},
	reverseString: str => {
		return str
			.toLowerCase()
			.split("")
			.reverse()
			.join("");
	}
};

module.exports = functions;
