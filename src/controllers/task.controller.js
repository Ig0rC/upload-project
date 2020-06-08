import Task from '../models/Tasks'


// CRIAÇÃO
export async function createTask(req, res){
    const {name, done, projectid } = req.body; //extração de texto 
    
    
    try {
        let newTask = await Task.create({
            name,
            done, 
            projectid
        }
        ,{
            fields: ['name', 'done', 'projectid']
        });
        if (newTask) {
            return res.json({
                message: 'Task Created Successfully',
                data: newTask
            });
        }
    } catch(error){
        console.log(error)
        res.status(500).json({
            message: 'something goes wrong',
            data:{

            }
        })

    }
};

// listar 
export async function getTasks(req, res){
   const tasks = await Task.findAll({
       attributes:['id', 'name', 'done', 'projectid'],
       order:[
           ['id','DESC']
       ]
   });
   res.json({data: tasks})

};


export async function getOneTask(req, res){
    const { id } = req.params; //requistar parametros para buscar
    const task = await Task.findOne({
        where: {id},
        attributes: ['id', 'name', 'done', 'projectid']
    });
    res.json(task)
};



export async function deleteTask(req, res){
    const { id } = req.params;
    await Task.destroy({
        where: {
            id
        }
    })
    res.json({message: 'Task Deletded'})

};

export async function updateTask(req, res){
    const { id } = req.params;
    const {projectid, name, done} = req.body; //requisitar nova inform
    

    const task = await Task.findOne({
        attributes: ['name', 'projectid', 'done', 'id'],
        where: {id}
    });
    
    const updateTask = await Task.update({
        name,
        done,
        projectid
    }, {
        where: {id}
    });

    res.json ({
        message: 'Update Sucesso', 
        updateTask
    })






};


export async function getTasksByProject(req, res){
    const { projectid } = req.params;
    const tasks =  await Task.findAll({
        where: {projectid},
        attributes: ['id', 'name', 'done', 'projectid']
    });
    res.json({tasks});

};










