import express from 'express';
import { handler, handlerWparam } from './api/v1/hola.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/v1/hola', handler);

app.get('/api/v1/hola/:nombre', handlerWparam);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});