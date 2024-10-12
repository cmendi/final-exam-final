import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GET, POST } from "../services/fetcher";
import { Category } from "../types";

const CreateBooks = () => {
	const nav = useNavigate();
	const { id } = useParams();
	const [bookTitle, setBookTitle] = useState("");
	const [bookAuthor, setbookAuthor] = useState("");
	const [bookPrice, setBookPrice] = useState(0);
	const [categoryId, setCategoryId] = useState<number | undefined>(undefined);
	const [categories, setCategories] = useState<Category[]>([]);

	useEffect(() => {
		GET("/api/categories").then(setCategories);
	}, [id]);

	const createBook = () => {
		POST(`/api/books`, { title: bookTitle, author: bookAuthor, price: bookPrice, category_id: categoryId }).then((book) => {
			nav(`/books/${book.id}`);
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
			<button className="btn btn-primary" onClick={createBook}>
				Submit
			</button>
		</>
	);
};

export default CreateBooks;
