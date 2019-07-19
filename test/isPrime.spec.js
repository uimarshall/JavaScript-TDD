const isPrime = require("../integrationTest/isPrime");
test("2 should return true as prime", () => {
	const actual = isPrime(2);
	expect(actual).toBe(true);
});
test("10 should return false as not prime", () => {
	const actual = isPrime(10);
	expect(actual).not.toBe(true);
});
