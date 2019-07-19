// Test Suites is the test files that we have - 'functions.spec.js'
// 'toBe' is used for primitive data types
// 'toEqual' is used for arrays & objects
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

// Test composeText
test("Should output name age ans sex", () => {
	const actual = functions.composeText("Ada", 12, "female");
	const expected = "Ada is a 12 years old female";
	expect(actual).toBe(expected);
});

// Test for nullity
test("Should output no data", () => {
	const actual = functions.composeText("", null, "");
	const expected = " is a null years old ";
	expect(actual).toBe(expected);
});

// Test for undefined
test("Should output undefined", () => {
	const actual = functions.composeText();
	const expected = undefined;
	expect(actual).toBe(expected);
});

// Test Factors of Numbers
test("should find the factors of 12", () => {
	const actual = functions.factorsOfNum(12);
	const expected = [1, 2, 3, 4, 6, 12];
	expect(actual).toEqual(expected);
});

test("should find the factors of 21", () => {
	const actual = functions.factorsOfNum(21);
	const expected = [1, 3, 7, 21];
	expect(actual).toEqual(expected);
});

// Test createUser
test("should output Marshall Ansel", () => {
	const actual = functions.createUser();
	const expected = { firstName: "Marshall", lastName: "Ansel" };
	expect(actual).toEqual(expected);
});

// Test reverse string
test("Check if reverString function exist", () => {
	const actual = functions.reverseString;
	expect(actual).toBeDefined();
});

test("Check if String reverses", () => {
	const actual = functions.reverseString("Hello");
	const expected = "olleh";
	expect(actual).toBe(expected);
});
