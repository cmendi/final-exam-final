import React, { useEffect, useState } from "react";
import { Book, Category } from "../types";
import { GET } from "../services/fetcher";
import { Link, useParams } from "react-router-dom";

const OneBook = () => {
	const { id } = useParams();
	const [bookDetails, setBookDetails] = useState<Book>();
	const [categories, setCategories] = useState<Category[]>([]);

	useEffect(() => {
		GET(`/api/books/${id}`).then(setBookDetails);
		GET(`/api/categories`).then(setCategories);
	}, [id]);

	const getCategories = (category_id: number) => {
		const category = categories.find((cat) => cat.id === category_id);
		return category ? category.name : "No category";
	};

	return (
		<>
			{bookDetails && (
				<div>
					<h1>{bookDetails.title}</h1>
					<h2>{bookDetails.author}</h2>
					<p>${bookDetails.price}</p>
					<p>{getCategories(bookDetails.category_id)}</p>
					<Link className="btn btn-primary" to={`/books/${bookDetails.id}/update`}>
						Update
					</Link>
				</div>
			)}
		</>
	);
};

export default OneBook;
