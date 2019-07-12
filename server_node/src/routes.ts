import { Router } from "express";
import WelcomeRoutes from "./routes/Welcome";

const router: Router = Router();

router.use("/welcome", WelcomeRoutes);

export default router;
