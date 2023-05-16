import { Router } from "express";

import AlimentosController from "../controller/alimentos.controller.js";

const route = Router();
const controller = new AlimentosController();

route.get("/alimentos", controller.get)

export default route