// Test Suites is the test files that we have - 'functions.spec.js'
const functions = require("../unitTest/functions");

test("2+4 should Not be equal to 5", () => {
	expect(functions.add(2, 4)).not.toBe(5);
});

test("2+3 should add up to 5", () => {
	const actual = functions.add(2, 3);
	const expected = 5;
	expect(actual).toBe(expected);
});

test("Should be null", () => {
	expect(functions.isNull(2, 4)).toBeNull();
});
