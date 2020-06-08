import express, { json } from 'express';
import morgan from 'morgan';
const http = require('http');


// importação de rotas

import projectRoutes from './routes/projects';
import taskRoutes from './routes/tasks'





const app = express();



//middlawares 

app.use(morgan('dev'));
app.use(json());


//rotas

app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);



export default app;