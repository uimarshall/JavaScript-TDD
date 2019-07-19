const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema and Model
const clientSchema = new Schema({
	name: String,
	weight: Number
});

const Clients = mongoose.model("clients", clientSchema);
module.exports = Clients;
