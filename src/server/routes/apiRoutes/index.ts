import express from "express";
import booksRouter from "./booksRouter";
import categoriesRouter from "./categoriesRouter";

const apiRoutes = express.Router();

apiRoutes.use("/books", booksRouter);
apiRoutes.use("/categories", categoriesRouter);

export default apiRoutes;
