/*
export function handler(req, res) {
    res.status(200).json({ message: process.env.MENSAJE_BIENVENIDA, version: '1.0.0' })
}

*/

export function handlerWparam(req, res) {
    const nombre = req.params.nombre;
    if (!nombre) {
        return res.status(400).json({ message: 'El nombre es requerido' })
    }
    return res.status(200).json({ message: 'Bienvenido a mi API, ' + nombre })
}