const factorsOfNum = n => {
	let factors = [];
	for (let i = 1, max = Math.sqrt(n); i <= max; i++) {
		if (n % i === 0) {
			factors.push(i, n / i);
		}
	}
	return factors.sort((a, b) => {
		return a > b;
	});
};

const isPrime = n => {
	// all prime numbers have precisely two factors.
	return factorsOfNum(n).length === 2;
};

module.exports = isPrime;
