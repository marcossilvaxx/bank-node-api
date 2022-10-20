import { Router, Request, Response } from "express";

const routes = Router();

// Health checking
routes.use("/health", (req: Request, res: Response) => {
  res.status(200).json({ status: "OK" });
});

export { routes };