import "dotenv/config";

import express from 'express';
import morgan from 'morgan';
import generateMarvelURL from './utils/generateMarvelURL';

import characterRoutes from './routes/character';
import userRoutes from './routes/user';

const app = express();

app.use(morgan('dev'))

app.use(express.json());

app.use('/api/characters', characterRoutes)
app.use('/api/users', userRoutes);




export default  app;