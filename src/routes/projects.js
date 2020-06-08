import { Router } from 'express';
const router = Router();
import { createProject, getProjects, getOneProject, deleteProject, updtateProject} from '../controllers/project.controller';

// api/projects/
router.post('/', createProject);
router.get('/', getProjects);


// api/project/: projectID

router.get('/:id', getOneProject); //buscar One.
router.delete('/:id', deleteProject); //DEletar ID
router.put('/:id', updtateProject) // atualizar ID


export default router;