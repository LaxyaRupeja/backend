const mongoose = require('mongoose');
const taskSchema = mongoose.Schema({
    title: { type: String },
    status: { type: Boolean, default: false },
    startTime: { type: String, default: Date },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user' }
}, {
    versionKey: false
})
const TaskModel = mongoose.model('todos', taskSchema);
module.exports = { TaskModel }