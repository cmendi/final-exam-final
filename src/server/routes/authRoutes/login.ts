import express from "express";
import db from "../../db";
import * as jwt from "jsonwebtoken";
import config from "../../config";
import { compareHash } from "../../utils/password";

const loginRouter = express.Router();

loginRouter.post("/", async (req, res) => {
	const { email, password } = req.body;
	try {
		const [userFound] = await db.users.find("email", email);
		if (!userFound || !compareHash(password, userFound.password)) {
			return res.status(401).json({ message: "Invalid credentials" });
		}

		const token = jwt.sign({ id: userFound, email: userFound.email }, config.jwt.secret, { expiresIn: config.jwt.expiration });
		res.json({ token, message: "You are now logged in!" });
	} catch (error) {
		res.status(400).json({ message: "Could not login" });
	}
});

export default loginRouter;
