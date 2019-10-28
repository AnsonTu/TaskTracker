// Create a user model to pass the correct fields and instructions to mongoose
// Mongoose is an ORM, a library that is used to interface with MongoDB
const mongoose = require("mongoose");
// Schema is used to tell mongoose what will be defined in the model
const Schema = mongoose.Schema;
// Bycrpt is used to encrypt passowords before they are saved
const bcrypt = require("bcrypt-nodejs");

// Define our model
const userSchema = new Schema({
  // Email must be a string, and must be unique before it can be saved
  // Change the string to lowercase, as MongoDB recognizes cases as two different strings
  email: { type: String, unique: true, lowercase: true },
  // Password is a string
  password: String
});

// On Save Hook, encrypt password
// Before saving a model, run this function
userSchema.pre("save", function(next) {
  // Get access to the user model
  const user = this; //user.email, user.password

  // Generate a salt, then run callback
  bcrypt.genSalt(10, function(err, salt) {
    if (err) {
      return next(err);
    }
    // Hash (encrypt) the password using the salt
    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) {
        return next(err);
      }

      // Overwrite plain text password with the encrypted password
      user.password = hash;
      // Save the model
      next();
    });
  });
});

userSchema.methods.comparePassword = function(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) {
      return callback(err);
    }
    callback(null, isMatch);
  });
};

// Create the model class
const ModelClass = mongoose.model("user", userSchema);

// Export the model
module.exports = ModelClass;
