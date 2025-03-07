const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String
});

// Define the Todo schema
const todoSchema = new mongoose.Schema({
    title: String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

// Create the models from the schemas
const UserModel = mongoose.model('User', userSchema);
const TodoModel = mongoose.model('todo collection', todoSchema);

// Export the models
module.exports = { UserModel, TodoModel };

