const { Schema, model } = require("mongoose");

const MovieSchema = new Schema({
  title: String,
  actors: [{ type: Schema.Types.ObjectId, ref: "Actor" }],
});

module.exports = model("Movie", MovieSchema);
