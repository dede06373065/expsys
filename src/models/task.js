const tasks = []
let id = 1


//create
function addTask({des}){
    const task={des ,id:id++,done:false};
    tasks.push(task);
    return task;
}

//readall
function getAllTask({des}){
    if(des){
        const filtered=tasks.filter((i)=>i.des.includes(des))
        return filtered;
    }
    return tasks;
}

function getTaskById(id){
    return tasks.find((i)=>i.id===id)
}

//update
function updateTaskById(id,{done,des}){
    const task=getTaskById(id);
    if(done!==undefined){
        task.done=!!done;
    }
    if(des){
        task.des=des
    }
    return task;
}

//delete
function deleteTaskById(id){
    const taskIndex=getTaskIndexById(id);
    tasks.splice(taskIndex,1)
}

//helper function no exports~
function getTaskIndexById(id){
    return tasks.findIndex((i)=>i.id===id)
}

module.exports={
    getAllTask,getTaskById,updateTaskById,deleteTaskById,addTask
}