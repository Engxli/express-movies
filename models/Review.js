const { Schema, model } = require("mongoose");

const ReviewSchema = new Schema({
  rating: Number,
  text: String,
  movie: { type: Schema.Types.ObjectId, ref: "Movie" },
});

module.exports = model("Review", ReviewSchema);
