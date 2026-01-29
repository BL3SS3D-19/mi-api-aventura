import 'dotenv/config';
import express from 'express';
import { handler, handlerWparam } from './api/v1/hola.js';
import { getUsuarios } from './api/v1/usuarios.js';
import { connectDB } from './db.js';
import { authMiddleware } from './api/middleware/auth.js';
import { login } from './api/v1/login.js';



const app = express();
const PORT = process.env.PORT || 3000;

connectDB();
app.use(express.json());  // Para parsear JSON en el body


app.get('/api/v1/hola', handler);

app.get('/api/v1/hola/:nombre', handlerWparam);

app.get('/api/v1/usuarios', authMiddleware, getUsuarios);

app.post("/api/v1/login", login);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
    console.log(process.env.JWT_SECRET_KEY);
});