 const taskModel = require("../models/Task");



 const controller = {


    save: (req, res) => {
        const params = req.body;
        const task = new taskModel();
        task.description = params.description
        task.creator = params.creator
        
        task.save((err, taskStored) => {
            if(err || !taskStored){
                return res.status(404).send({
                    status: "error",
                    message: "fail save task "
                })
            }

            return res.status(200).send({
                status: "success",
                taskStored
            });
        });
    },


    getTasks: (req, res) => {
        const query = taskModel.find({});

        query.sort("-date").exec((err, tasks) => {
            if(err){
                return res.status(500).send({
                    status: "error",
                    message: "Error al obtener tareas"
                })
            }

            if(!tasks){
                return res.status(404).send({
                    status: "error",
                    message: "No hay articulos para mostrar"
                })
            }

            return res.status(200).send({
                status: "success",
                tasks
            });
        });

    },

    delete: (req, res) => {
        let taskId = req.params.id;
        taskModel.findOneAndDelete({_id:taskId}, (err, taskRemoved) =>{

            if(err){
                return res.status(500).send({
                    status: "error",
                    message: "error delete task"
                });
            }

            if(!taskRemoved){
                return res.status(404).send({
                    status: "error",
                    message: "error delete"
                });
            }

            return res.status(200).send({
                status: "success",
                task: taskRemoved
            })
        })
    },

    update: (req, res) =>{
        const params = req.body
        const task = new taskModel();

        task.description = params.description
        task.completed = params.completed
        task.creator = params.creator

        let taskId = params.id;
        taskModel.findByIdAndUpdate ({_id:taskId}, task =>{

            if(!task){
                return res.status(404).send({
                    status: "error",
                    message: "error update"
                });
            }
            return res.status(200).send({
                status: "succes",
                task: task
            })
        }) 
    }
 }

 module.exports = controller;