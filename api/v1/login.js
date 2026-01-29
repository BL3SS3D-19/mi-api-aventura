import jwt from 'jsonwebtoken';
import Usuario from '../../models/users.js';



const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

export async function login(req, res) {

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Email y password son obligatorios" });
    }

    try {
        const usuario = await Usuario.findOne({ email });
        if (!usuario || usuario.password !== password) {
            return res.status(401).json({ message: "Credenciales inválidas" });
        }
        const token = jwt.sign({ email: usuario.email }, JWT_SECRET_KEY, { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

}
