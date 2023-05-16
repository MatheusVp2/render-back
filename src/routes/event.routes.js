import { Router } from "express";
import EventController from "../controller/event.controller.js";

const route = Router();
const controller = new EventController();

route.get("/evento", controller.get)
route.post("/evento", controller.post)

export default route;