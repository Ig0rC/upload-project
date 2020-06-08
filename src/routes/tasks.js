import { Router } from 'express';
const router = Router();

import {createTask, getTasks, getOneTask, deleteTask, updateTask, getTasksByProject} from '../controllers/task.controller'


// /api/tasks
router.post('/', createTask);
router.get('/', getTasks);


router.get('/:id', getOneTask);
router.delete('/:id', deleteTask)
router.put('/:id', updateTask)


// buscar especializada

router.get('/project/:projectid', getTasksByProject)

export default router;