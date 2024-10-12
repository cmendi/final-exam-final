import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { tokenKey } from "../services/fetcher";

const NavBar = () => {
	const nav = useNavigate();
	const handleLogout = () => {
		localStorage.removeItem(tokenKey);
		alert("You are logged out!");
		nav("/login");
	};
	return (
		<>
			<div>
				<Link className="p-3" to={"/"}>
					Home
				</Link>
				<Link className="p-3" to={"/books"}>
					Books
				</Link>
				<Link className="p-3" to={"/books/new"}>
					Create Books
				</Link>
				<Link className="p-3" to={"/login"}>
					Register/Login
				</Link>
				<button className="p-3 btn btn-primary" onClick={handleLogout}>
					Logout
				</button>
			</div>
		</>
	);
};

export default NavBar;
