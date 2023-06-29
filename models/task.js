const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name must be provided"],
    trim: true,
    maxlength: [40, "name cannot be more than 40 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const taskSchema = mongoose.model("SchemaTask", TaskSchema);

module.exports = taskSchema;
