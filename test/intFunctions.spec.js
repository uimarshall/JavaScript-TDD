const {
	moe,
	eenyMeeny,
	eenyMeenyMinyMoe,
	eeny
} = require("../integrationTest/intFunctions");

test("Should output Enny Meeny Miny Moe", () => {
	const actual = eenyMeenyMinyMoe();
	const expected = "Eeny Meeny Miny Moe";
	expect(actual).toBe(expected);
});
