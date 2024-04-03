const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  priority: { type: String, required: true },
  category: { type: String, required: true },
  completed: { type: String, default:"false" },
  createdAt: { type: Date, default: Date.now },
});
// creating text index for searching 
schema.index({
  title : 'text' , 
  description: 'text',
  category : 'text'

});
const TASKDATA = mongoose.model("taskData", schema);

module.exports = TASKDATA;
