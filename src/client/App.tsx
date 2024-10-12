import React from "react";
import AllBooks from "./views/AllBooks";
import CreateBooks from "./views/CreateBook";
import Home from "./views/Home";
import LoginReg from "./views/LoginReg";
import OneBook from "./views/OneBook";
import UpdatedBook from "./views/UpdatedBook";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";

interface AppProps {}

const App = (props: AppProps) => {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/books" element={<AllBooks />} />
				<Route path="/books/:id" element={<OneBook />} />
				<Route path="/books/:id/update" element={<UpdatedBook />} />
				<Route path="/books/new" element={<CreateBooks />} />
				<Route path="/login" element={<LoginReg />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
