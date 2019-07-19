
const assert = require("assert");
const Clients = require("../models/clients");

// Describe tests
describe("Updating records", function() {
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
	it("Updates one record in the database", function(done) {
		// find frm the 'Clients' table and update where name='Ekpenyong'
		// the 2nd argument is what u want to update to
		Clients.findOneAndUpdate({ name: "Ekpenyong" }, { name: "Rooney" }).then(
			() => {
				// find frm d Clients table an 'id supplied by mongo' == a particular record's id
				Clients.findOne({ _id: clientone._id }).then(res => {
					assert(res.name === "Rooney");
					done();
				});
			}
		);
	});
});
