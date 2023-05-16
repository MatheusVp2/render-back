import { Router } from "express";
import "dotenv/config"

const route = Router();

route.get("/health", (req, res) => {
    return res.json({ message: "Server is running" }).status(200);
})

route.get("/envs", (req, res) => {
    return res.json({ envs: process.env }).status(200);
})

export default route;