const mongoose =  require('mongoose')

const taskSchema =  new mongoose.Schema({

    description:{ type:String, required:true },
    date: {type: Date, default: Date.now } 
    
})

const Task = mongoose.model('tasks', taskSchema)
module.exports = Task