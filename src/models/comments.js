const { Schema, model } = require("mongoose");

const CommentsSchema = new Schema(
  {
    taskId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("comments", CommentsSchema);
