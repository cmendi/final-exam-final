// import express, db and types
import express from "express";
import db from "../../db";
import { Book } from "../../types";
//connect express
const booksRouter = express.Router();
//get all
booksRouter.get("/", async (req, res) => {
	try {
		const results = await db.books.getAll();
		res.json(results);
	} catch (error) {
		console.log(error);
		res.status(400).json({ message: "Cannot get all books" });
	}
});
// get one
booksRouter.get("/:id", async (req, res) => {
	const id = parseInt(req.params.id);
	try {
		const results = db.books.getOne(id);
		res.json(results);
	} catch (error) {
		console.log(error);
		res.status(400).json({ message: `Cannot get book with id ${id}` });
	}
});
// create
booksRouter.post("/", async (req, res) => {
	const { title, author, price, category_id } = req.body;
	try {
		const newBook: Book = {
			title,
			author,
			price,
			category_id,
		};

		const results = await db.books.create(newBook);
		const bookId = results.insertId;
		res.json({ results, id: bookId });
	} catch (error) {
		console.log(error);
		res.status(400).json({ message: "Cannot create that book" });
	}
});
//update
booksRouter.put("/:id", async (req, res) => {
	const { title, author, price, category_id } = req.body;
	const id = parseInt(req.params.id);
	try {
		const updatedBook: Book = {
			title,
			author,
			price,
			category_id,
		};

		await db.books.update(updatedBook, id);
		res.status(200).json({ message: "Created Book" });
	} catch (error) {
		console.log(error);
		res.status(400).json({ message: "Cannot update that book" });
	}
});
//delete
booksRouter.delete("/:id", async (req, res) => {
	const id = parseInt(req.params.id);
	try {
		await db.books.destroy(id);
		res.status(200).json({ message: "Book Deleted" });
	} catch (error) {
		console.log(error);
		res.status(400).json({ message: "Cannot delete that book" });
	}
});
//export
export default booksRouter;
