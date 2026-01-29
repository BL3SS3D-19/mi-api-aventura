import Usuario from "../../models/users.js";


export async function getUsuarios(req, res) {
    try {
        const usuarios = await Usuario.find();
        res.status(200).json({ usuarios });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}