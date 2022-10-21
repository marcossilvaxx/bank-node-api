import express from 'express';
import cors from 'cors';
import { routes } from './http/routes';
import "dotenv/config";

const app = express();

app.use(cors());
app.use(routes);

export { app };

