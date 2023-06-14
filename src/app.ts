import "dotenv/config";

import express from 'express';
import morgan from 'morgan';
import authMiddleware from "./middleware/auth.middleware";

import characterRoutes from './routes/character';
import comicRoutes from './routes/comics';
import userRoutes from './routes/user';

const app = express();

app.use(morgan('dev'))

app.use(express.json());

app.use('/api/characters', characterRoutes)
app.use('/api/comics', comicRoutes);
app.use('/api/users', userRoutes);




export default  app;