import React, { useEffect, useState } from "react";
import { Book, Category } from "../types";
import { DELETE, GET, PUT } from "../services/fetcher";
import { useNavigate, useParams } from "react-router-dom";

const UpdatedBook = () => {
	const nav = useNavigate();
	const { id } = useParams();
	const [bookTitle, setBookTitle] = useState("");
	const [bookAuthor, setbookAuthor] = useState("");
	const [bookPrice, setBookPrice] = useState(0);
	const [categoryId, setCategoryId] = useState<number | undefined>(undefined);
	const [categories, setCategories] = useState<Category[]>([]);

	useEffect(() => {
		GET(`/api/books/${id}`).then((book: Book) => {
			setBookTitle(book.title);
			setbookAuthor(book.author);
			setBookPrice(book.price);
			setCategoryId(book.category_id);
		});
		GET("/api/categories").then(setCategories);
	}, [id]);

	const updateBook = () => {
		PUT(`/api/books/${id}`, { title: bookTitle, author: bookAuthor, price: bookPrice, category_id: categoryId }).then(() => {
			nav(`/books/${id}`);
		});
	};

	const deleteBook = () => {
		DELETE(`/api/books/${id}`).then(() => {
			nav("/books");
		});
	};

	return (
		<>
			<div>
				<label>Title</label>
				<input value={bookTitle} onChange={(e) => setBookTitle(e.target.value)} />
			</div>
			<div>
				<label>Author</label>
				<input value={bookAuthor} onChange={(e) => setbookAuthor(e.target.value)} />
			</div>
			<div>
				<label>Price</label>
				<input value={bookPrice} onChange={(e) => setBookPrice(parseInt(e.target.value))} />
			</div>
			<div>
				<label>Category</label>
				<select value={categoryId} onChange={(e) => setCategoryId(parseInt(e.target.value))}>
					{categories.map((cat) => (
						<option key={cat.id} value={cat.id}>
							{cat.name}
						</option>
					))}
				</select>
			</div>
			<button className="btn btn-primary" onClick={updateBook}>
				Save
			</button>
			<button className="btn btn-danger" onClick={deleteBook}>
				Delete
			</button>
		</>
	);
};

export default UpdatedBook;
