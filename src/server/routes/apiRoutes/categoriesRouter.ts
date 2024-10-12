import express from "express";
import db from "../../db";

const categoriesRouter = express.Router();

categoriesRouter.get("/", async (req, res) => {
	try {
		const results = await db.categories.getAll();
		res.json(results);
	} catch (error) {
		console.log(error);
		res.status(400).json({ message: "Cannot get all categories" });
	}
});

export default categoriesRouter;
