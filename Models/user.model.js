const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    todosId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'todos' }]
}, {
    versionKey: false
})
const UserModel = mongoose.model('user', userSchema);
module.exports = { UserModel }