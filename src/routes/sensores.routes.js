import { Router } from "express";
import cache from "../cache/index.js";
import SensoresController from "../controller/sensores.controller.js";


const route = Router();
const controller = new SensoresController();

route.get("/sensores", controller.get)
route.post("/sensores", controller.post)

export default route;