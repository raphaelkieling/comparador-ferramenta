import { Router } from "express";
import WelcomeController from "../controller/WelcomeController";

const routes: Router = Router();
const welcome = new WelcomeController();

routes.get("/", welcome.index);

export default routes;
