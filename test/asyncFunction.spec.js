const fetchUser = require("../unitTest/asyncFunction");

// Async Await
test("Username should be Bret", async () => {
	// Assertions is used for promised based functions
	expect.assertions(1);
	const data = await fetchUser();
	const actual = data.username;
	const expected = "Bret";
	expect(actual).toEqual(expected);
});
