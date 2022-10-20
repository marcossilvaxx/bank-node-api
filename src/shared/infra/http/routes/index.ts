import { Router, Request, Response } from "express";
import { accountRouter } from "../../../../infra/http/routes/account.routes";

const routes = Router();

// Health checking
routes.use("/health", (request: Request, response: Response) => {
  response.status(200).json({ status: "OK" });
});

routes.use("/accounts", accountRouter);

export { routes };