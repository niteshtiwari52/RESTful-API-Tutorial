const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ideaSchema = new Schema(
  {
    idea_name: {
      type: String,
      required: true,
    },
    idea_author_name: {
      type: String,
      require: true,
    },
    idea_description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Idea", ideaSchema);
