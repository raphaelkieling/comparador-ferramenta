import Express from "express";
import routes from "../routes";

const app: Express.Application = Express();

app.use("", routes);

export default app;
