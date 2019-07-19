const mocha = require("mocha");
const assert = require("assert");
const Clients = require("../models/clients");

// Describe tests
describe("Finding records", function() {
	// before each test, run this hook so that we can hv a data in db
	var clientone;
	beforeEach(function(done) {
		// Create a new instance of 'Clients' model or record

		clientone = new Clients({
			name: "Ekpenyong"
		});

		clientone.save().then(function() {
			// 'isNew' returns a Boolean, if it returns true it means the data has not been saved to the db
			assert(clientone.isNew === false);
			// done after the asynchronous req is complete
			done();
		});
	});
	// Create tests
	it("Finds one record in the database", function(done) {
		// find frm the 'Clients' table where name='Ekpenyong'
		Clients.findOne({ name: "Ekpenyong" }).then(result => {
			// run the test that name = 'Ekpenyong'
			assert(result.name === "Ekpenyong");
			done();
		});
	});

	// Find by id
	it("Finds record by id in the database", function(done) {
		// find frm the 'Clients' table where id='$id' or find the client wt this id and dtore its rows in 'result'
		Clients.findOne({ _id: clientone._id }).then(result => {
			// run the test that name = 'Ekpenyong'
			assert(result._id.toString() === clientone._id.toString());
			done();
		});
	});
});
