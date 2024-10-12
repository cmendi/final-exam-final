import React, { useEffect, useState } from "react";
import { Book } from "../types";
import { GET } from "../services/fetcher";
import { Link } from "react-router-dom";

const AllBooks = () => {
	const [books, setBooks] = useState<Book[]>([]);

	useEffect(() => {
		GET("/api/books").then(setBooks);
	}, []);

	return (
		<>
			{books.map((book) => (
				<div key={`book-id-${book.id}`}>
					<h1>{book.title}</h1>
					<h2>{book.author}</h2>
					<Link className="btn btn-primary" to={`/books/${book.id}`}>
						Details
					</Link>
				</div>
			))}
		</>
	);
};

export default AllBooks;
