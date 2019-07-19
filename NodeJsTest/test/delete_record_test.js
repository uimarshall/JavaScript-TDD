
const assert = require("assert");
const Clients = require("../models/clients");

// Describe tests
describe("Deleting records", function() {
	// before each test, run this hook so that we can hv a data in db
	var clientone;
	beforeEach(function(done) {
		// Create a new instance of 'Clients' model or record

		clientone = new Clients({
			name: "Ekpenyong"
		});

		clientone.save().then(function() {
			// done after the asynchronous req is complete
			done();
		});
	});
	// Create tests
	it("Delete one record from the database", function(done) {
		// find frm the 'Clients' table where name='Ekpenyong'
		Clients.findOneAndRemove({ name: "Ekpenyong" }).then(function() {
			// check if the 'name' is removed & return null as result or response frm promise interface
			Clients.findOne({ name: "Ekpenyong" }).then(function(result) {
				assert(result === null);
				done();
			});
		});
	});
});
