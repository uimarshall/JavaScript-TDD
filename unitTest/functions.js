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
		let factors = [];
		for (let i = 1, max = Math.sqrt(n); i <= max; i++) {
			if (n % i === 0) {
				factors.push(i, n / i);
			}
		}
		return factors.sort((a, b) => {
			return a > b;
		});
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
