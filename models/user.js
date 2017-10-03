const mongoose = require("mongoose");
	Schema = mongoose.Schema,
	bcrypt = require('bcrypt'),
    SALT_WORK_FACTOR = 10;

const userSchema = new Schema({
	username: { type: String, required: true, index: {unique: true}},
	password: { type: String, required: true },
	rating: [[Number]]
});


//getPrice converts back to readable format
function getPrice(num){
    return (num/100).toFixed(2);
}

//setPrice converts it back to cents
function setPrice(num){
    return num*100;
}

//validation using Regex
if ( req.body.price ) {
    req.assert('price', 'Enter a price (numbers only)').regex(/^\d+(\.\d{2})?$/);
}

//bcrypt
User.pre('save', function(next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password along with our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});


UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};


const User = mongoose.model("User", userSchema);
module.exports = User;
