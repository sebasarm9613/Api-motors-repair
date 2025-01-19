import { Router } from "express";
import { UserRouter } from "./user/route";
import { RepairRoutes } from "./repair/route";


export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.use("/api/v1/users", UserRouter.routes);
    router.use("/api/v1/repairs", RepairRoutes.routes);

    return router;
  }
}