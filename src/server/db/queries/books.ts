//import Query function and types
import { Query } from "../connections";
import { Book } from "../../types";
//get all
const getAll = () => Query<Book[]>("SELECT * FROM Books");
//get one
const getOne = (id: number) => Query<Book[]>("SELECT * FROM Books WHERE id=?", [id]);
//create one
const create = (newBook: Book) => Query("INSERT INTO Books SET ?", [newBook]);
//update one
const update = (updatedBook: Book, id: number) => Query("UPDATE Books SET ? WHERE id=?", [updatedBook, id]);
//delete one
const destroy = (id: number) => Query("DELETE FROM Books WHERE id=?", [id]);
// export all functions

export default {
	getAll,
	getOne,
	create,
	update,
	destroy,
};
