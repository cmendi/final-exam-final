import express from "express";
import apiRoutes from "./apiRoutes";
import authRouter from "./authRoutes";

const routes = express.Router();

routes.use("/api", apiRoutes);
routes.use("/auth", authRouter);

export default routes;
