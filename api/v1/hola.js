
export function handler(req, res) {
    res.status(400).json({ message: 'El parametro nombre es requerido' })
}


export function handlerWparam(req, res) {
    const nombre = req.params.nombre;
    if (!nombre) {
        return res.status(400).json({ message: 'El nombre es requerido' })
    }
    return res.status(200).json({ message: 'Bienvenido a mi API, ' + nombre })
}