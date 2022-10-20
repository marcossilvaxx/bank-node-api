import express from 'express';
import cors from 'cors';
import { routes } from './http/routes';

const app = express();

app.use(cors());
app.use(routes);

export { app };

