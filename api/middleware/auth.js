import jwt from 'jsonwebtoken';


const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

export function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ message: 'token de acceso no proporcionado' });
    }

    const token = authHeader.split(' ')[1]; //Bearer token

    if (!token) {
        return res.status(401).json({ message: 'token de acceso no valido' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET_KEY);
        req.user = decoded;
        next(); //Pasamos al endpoint
    } catch (error) {
        return res.status(401).json({ message: 'token de acceso no valido' });
    }
}