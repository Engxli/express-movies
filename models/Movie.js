const { Schema, model } = require("mongoose");

const MovieSchema = new Schema({
  title: String,
  actors: [{ type: Schema.Types.ObjectId, ref: "Actor" }],
  reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
});

module.exports = model("Movie", MovieSchema);
