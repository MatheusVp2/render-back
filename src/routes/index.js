import { Router } from "express";
import HealthRouter from "./health.routes.js";
import AlimentosRouter from "./alimentos.routes.js";
import SensoresRouter from "./sensores.routes.js";
import EventoRouter from "./event.routes.js";

const routers = Router();

routers.use(HealthRouter)
routers.use(AlimentosRouter)
routers.use(SensoresRouter)
routers.use(EventoRouter)

export default routers;