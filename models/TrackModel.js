var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var Schema = mongoose.Schema;

var FieldSchema = new Schema({
    MDI_VEHICLE_STATE: Object,
    MDI_IDLE_JOURNEY: Object,
    MDI_JOURNEY_TIME: Object,
    MDI_EXT_BATT_VOLTAGE: Object,
    MDI_RECORD_REASON: Object,
});

// create a schema
var TrackSchema = new Schema({
  account_id: String,
  id: Number,
  connection_id: Number,
  index:  Number,
  asset: String,
  recorded_at: String,
  recorded_at_ms: String,
  received_at: String,
  fields: FieldSchema,
  createdOn: { type: Number, default: Date.now },
});

var Track = mongoose.model('Track', TrackSchema);

module.exports = Track;
