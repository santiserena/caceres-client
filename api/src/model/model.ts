const mongoose = require("mongoose");

const drawingsSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: Buffer,
    required: true,
  },
  secondaryImages: {
    type: Array,
    required: false,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

  date: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("drawings-model", drawingsSchema);
