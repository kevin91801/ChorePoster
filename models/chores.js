const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const choreSchema = new Schema({
	title: { type: String, trim: true, required: true },
	description: { type: String, trim: true, required: true },
	price: { type: Number, required: true },
	date: { type: Date, default: Date.now },
	completed: { type: Boolean, default: false }
});

const Chore = mongoose.model("Chore", choreSchema);

module.exports = Chore;