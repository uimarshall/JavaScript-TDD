// All the dependencies must be correct for integration test to pass
// Integration test is good to help us determine the dependency that is breaking our code
const moe = () => {
	return "Moe";
};

const eenyMeeny = () => {
	return `${eeny()} Meeny`;
};

const eenyMeenyMinyMoe = () => {
	const miny = "Miny";

	return `${eenyMeeny()} ${miny} ${moe()}`;
};

const eeny = () => {
	return "Eeny";
};

module.exports = { moe, eenyMeeny, eenyMeenyMinyMoe, eeny };
