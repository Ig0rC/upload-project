import Project from '../models/Project';

//LITAR
export async function getProjects(req,res) {  
   try{ 
        const projects = await Project.findAll();
        res.json({
        data: projects
    });
   }catch(e){
    console.log(e)
   }
   
};


//INSERIR
export async function createProject(req, res) {
    const { name, priority, description, deliverydate } = req.body;

    try {
        let newProject = await Project.create({
            name,
            priority,
            description,
            deliverydate
        },
        {
            fields: ['name', 'priority', 'description', 'deliverydate']
        });
        if (newProject) {
            return res.json({
                message: 'Project Created Successfully',
                data: newProject
            });
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Something goes wrong',
            data: {
            }
        });
    }
};


//BUSCAR ID
export async function getOneProject(req,res){
    const { id } = req.params; //requistar parametros para buscar
    const projects = await Project.findOne({
        where: {
            id // criar uma variavel para salvar a busca
        }
    });
    res.json([projects]);
};

//DELETAR ID

export async function deleteProject(req, res){
    const { id } = req.params;
    const deleteRowCount = await Project.destroy({
        where:{
            id
        }
    })
    res.json({
        message:'Project Deleted Com sucesso',
        count: deleteRowCount

    });
};

// ATUALIZAR ID

export async function updtateProject(req,res) {
    const { id } = req.params; // vai encontra o ID
    const { name, priority, description, deliverydate }  = req.body; // vai pegar nova info

    const projects = await Project.findAll({
        attributes: ['id', 'name', 'priority', 'description', 'deliverydate'],
        where:{
            id
        }
    });

    if(projects.length > 0){
        projects.forEach(async project => {
            await project.update({
                name, 
                priority,
                description,
                deliverydate
            })
        });
    }
    return res.json({
        message: 'Project Updated SuccessFully',
        data: projects
    })

}
