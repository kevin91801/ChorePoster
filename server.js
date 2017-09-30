const bodyParser = require("body-parser");
const express = require("express");
const expressValidator = require("express-validator");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const mongo = require("mongodb");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("client/build"));
app.use(routes);
app.use(flash());

app.use(function (req, res, next) {
	res.locals.success_msg = req.flash("success_msg");
	res.locals.error_msg = req.flash("error_msg");
	res.locals.error = req.flash("error");
	next();
});

mongoose.Promise = global.Promise;

mongoose.connect(
	process.env.MONGODB_URI || "mongodb://localhost/ChorePoster"
	{
		useMongoClient: true
	}
);

app.listen(PORT, function() {
	console.log("Connecting to port ", PORT)
});