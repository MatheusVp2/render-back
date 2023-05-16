import cache from "../cache/index.js";
import knex from "../database/index.js"


export default class SensoresController {

    async get(req, res) {
        const { type } = req.query;
        let cacheName = `stream_cache_${type}`
        const value = cache.get(cacheName);
        return res.json({ data: value }).status(200);
    }

    async post(req, res) {
        const { type, value } = req.body;

        let cacheName = `stream_cache_${type}`
        cache.set(cacheName, value);

        if (!cache.has(`sensor_cache_${type}`)) {
            const respInsert = await knex.insert({ type, svalues: value }).table("sensores")
            cache.set(`sensor_cache_${type}`, value, 30);
            return res.json({ message: "Insert event data", data: respInsert }).status(200);
        }

        return res.json({ message: "Update event data" }).status(200);
    }

}