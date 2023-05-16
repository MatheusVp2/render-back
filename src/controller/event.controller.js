import cache from "../cache/index.js";
import knex from "../database/index.js";

export default class EventController {

    async get (req, res) {
        const { event } = req.query;
        let cacheName = `event_cache_${event}`
        if (!cache.has(cacheName)) return res.status(404).json({ error: "Not Found" });
        return res.json({ message: cache.take(cacheName) }).status(200);
    }

    async post (req, res) {

        const { event } = req.body;

        if (event == "sensor") {
            const { id } = req.body;
            const result = await knex.select("*").table("alimentos").where({ id: id }).first();
            console.log(result)
            const cacheData = { id: id, temperatura: result.temperatura, tempo: result.tempo }
            let cacheName = `event_cache_${event}`
            cache.set(cacheName, cacheData);
            return res.json({ dados: result }).status(200);
        }

        if (event == "app") {
            let cacheName = `event_cache_${event}`
            const cacheData = { id: 1, terminou: true }
            cache.set(cacheName, cacheData);
        }

        return res.json({ dados: req.body }).status(200);
    }

}