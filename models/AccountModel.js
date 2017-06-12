var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var Schema = mongoose.Schema;

// create a schema
var accountSchema = new Schema({
  name: { type: String, required: true, unique: true },
  createdOn: { type: Date, default: Date.now },
});

var Account = mongoose.model('Account', accountSchema);

module.exports = Account;
