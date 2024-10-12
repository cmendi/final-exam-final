import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
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
				<Link className="p-3" to={"/"}>
					Logout
				</Link>
			</div>
		</>
	);
};

export default NavBar;
