import express from "express";
import db from "../../db";
import config from "../../config";
import * as jwt from "jsonwebtoken";
import { generateHash } from "../../utils/password";

const registerRouter = express.Router();

registerRouter.post("/", async (req, res) => {
	const { email, password } = req.body;
	try {
		const newUser = { email, password };
		newUser.password = generateHash(newUser.password);
		const results = await db.users.insert(newUser);
		const token = jwt.sign({ id: results.insertId, email: newUser.email }, config.jwt.secret, { expiresIn: config.jwt.expiration });
		res.json(token);
	} catch (error) {
		console.log(error);
		res.status(400).json({ message: "Cannot register at this time" });
	}
});

export default registerRouter;
