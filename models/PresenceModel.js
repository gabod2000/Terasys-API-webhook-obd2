var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var Schema = mongoose.Schema;

// create a schema
var PresenceSchema = new Schema({
  id: Number,
  account_id: String,
  connection_id: Number,
  type: { type: String },
  asset: String,
  time: String,
  reason: String,
  createdOn: { type: Date, default: Date.now },
});

var Presence = mongoose.model('Presence', PresenceSchema);

module.exports = Presence;
