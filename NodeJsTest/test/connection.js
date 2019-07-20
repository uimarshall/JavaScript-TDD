const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
// Connect to the db b4 tests run
before(done => {
	// connect to db
	mongoose.connect("mongodb://localhost/testdb", { useNewUrlParser: true });
	// listen to when the connection is successfully made

	mongoose.connection
		.once("open", function() {
			console.log("Connection made");
			done();
		})
		.on("error", function(error) {
			console.log("Connection error:", error);
		});
});

beforeEach(done => {
	// Drop the coll
	mongoose.connection.collections.clients.drop(function() {
		done();
	});
});
