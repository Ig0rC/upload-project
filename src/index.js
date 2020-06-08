//import app from './app';
import '@babel/polyfill';
import express, { json } from 'express';
import morgan from 'morgan';

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





app.listen(3000);


export default app;