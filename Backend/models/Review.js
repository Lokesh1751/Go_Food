const mongoose = require("mongoose");
const { Schema } = mongoose;
const ReviewSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("reviews", ReviewSchema);
