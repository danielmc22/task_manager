const mongoose =  require('mongoose')
 

const taskSchema =  new mongoose.Schema({

    description: String,
    date: {type: Date, default: Date.now},
    completed: {type: Boolean, default: false},
    creator: String
    
});

module.exports = mongoose.model('tasks', taskSchema);