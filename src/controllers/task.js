const Task=require('../models/task')

function getAllTask(req,res){
    const {des}=req.query
    const tasks=Task.getAllTask({des})
    return res.json(tasks)

}
function getTaskById(req,res){
    const {id}=req.params
    const task=Task.getTaskById(id)
    return res.json(task)

}
function addTask(req,res){
    const {des}=req.body;
    const task=Task.addTask({des})
    return res.states(201).json(task)

}
function updateTaskById(req,res){
    const {id}=req.params;
    const {des,done}=req.body;
    const task=Task.updateTaskById(id,{des,done})
    return res.json(task)

}
function deleteTaskById(req,res){
    const {id}=req.params
    Task.deleteTaskById(id)
    return res.sendState(204)

}

module.exports={
    getTaskById, 
    getAllTask,
    addTask, 
    updateTaskById,
     deleteTaskById 
} 