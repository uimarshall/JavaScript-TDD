const assert = require("assert");
const Clients = require("../models/clients");

// Describe tests
describe("Saving records", () => {
	// Create tests
	it("Saves a record to the database", done => {
		// Create a new instance of 'Clients' model or record
		const clientone = new Clients({
			name: "Ekpenyong"
		});
		// save the 'clientone' record to the db
		clientone.save().then(function() {
			// 'isNew' returns a Boolean, if it returns true it means the data has not been saved to the db
			// The clientone is new as at when created b4 saved to db
			assert(clientone.isNew === false);
			// 'done' is executed to tell mocha that the asynchronous req is complete and can nmove to the next test
			done();
		});
	});

	// Next Test goes here(another 'it' func)
});
