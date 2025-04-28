const { Schema, model } = require("mongoose");

const TasksSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: ["pendiente", "en progreso", "completada"],
      required: true,
    },
    priority: {
      type: ["alta", "media", "baja"],
      required: true,
    },
    assignedTo: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("tasks", TasksSchema);
