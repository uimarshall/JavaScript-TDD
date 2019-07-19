const mongoose = require("mongoose");
const assert = require("assert");
// require the author model
const Author = require("../models/authors");
describe("Nesting records", () => {
	// b4 each test, get d authors coll and drop it so that it wil not keep creating the same author each time we run the test.
	beforeEach(done => {
		mongoose.connection.collections.authors.drop(() => {
			done();
		});
	});
	//   Create tests
	it("Creates an author with sub-documents", done => {
		var cal = new Author({
			name: "Caleb Ross",
			books: [{ title: "Tears of the Sun", pages: 430 }]
		});
		cal.save().then(() => {
			// find the author wt this name in the Author model/collection
			Author.findOne({ name: "Caleb Ross" }).then(record => {
				assert(record.books.length === 1);
				done();
			});
		});
	});
	it("Adds a book to an author", done => {
		var cal = new Author({
			name: "Caleb Ross",
			books: [{ title: "Tears of the Sun", pages: 430 }]
		});
		cal.save().then(() => {
			// find the author wt this name in the Author model/collection
			Author.findOne({ name: "Caleb Ross" }).then(record => {
				// add a book to the book array
				record.books.push({ title: "Secret of the Housemates", pages: 400 });
				// save the book after push
				record.save().then(() => {
					Author.findOne({ name: "Caleb Ross" }).then(result => {
						assert(record.books.length === 2);
						done();
					});
				});
			});
		});
	});
});
