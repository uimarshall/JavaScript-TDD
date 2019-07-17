const axios = require("axios");
const fetchUser = () => {
	return axios
		.get("https://jsonplaceholder.typicode.com/users/1")
		.then(res => res.data)
		.catch(err => console.error(err));
};

module.exports = fetchUser;
