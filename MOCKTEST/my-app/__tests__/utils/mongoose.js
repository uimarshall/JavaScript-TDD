import mongoose from "mongoose";

export const connect = () =>
	mongoose.connect("mongodb://localhost:27017/my-app_db", {
		useNewUrlParser: true
	});

export const disconnect = () => mongoose.connection.close();
