import knex from "../database/index.js";

export default class AlimentosController {

    async get (req, res) {
        const result = await knex.select("*").table("alimentos")
        const response = result.map((item) => {
            return {
                id: item.id,
                nome: item.alimento,
                temperatura: item.temperatura,
                tempo: item.tempo,
            }
        })
        return res.json({ data: response }).status(200);
    }

}