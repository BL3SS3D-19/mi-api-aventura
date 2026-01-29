export default function handler(req, res) {
    res.status(200).json({ message: process.env.MENSAJE_BIENVENIDA, version: '1.0.0' })
}

export default function handlerWparam(req, res) {
    const nombre = req.params.nombre;
    res.status(200).json({ message: 'Bienvenido a mi API, ' + nombre })
}