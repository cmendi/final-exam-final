import React, { useState } from "react";
import { POST, tokenKey } from "../services/fetcher";
import { useNavigate } from "react-router-dom";

const LoginReg = () => {
	const nav = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		POST("/auth/login", { email, password }).then((data) => {
			localStorage.setItem(tokenKey, data.token);
			alert("You are logged in!");
			nav("/");
		});
	};
	const handleRegister = (e: React.MouseEvent<HTMLButtonElement>) => {
		POST("/auth/register", { email, password }).then((data) => {
			localStorage.setItem(tokenKey, data.token);
			alert("You are now registered!");
			nav("/login");
		});
	};

	return (
		<>
			<div>
				<label>Email</label>
				<input type="text" onChange={(e) => setEmail(e.target.value)} />
			</div>
			<div>
				<label>Password</label>
				<input type="password" onChange={(e) => setPassword(e.target.value)} />
			</div>
			<button className="btn btn-primary" onClick={handleLogin}>
				Login
			</button>
			<button className="btn btn-primary" onClick={handleRegister}>
				Register
			</button>
		</>
	);
};

export default LoginReg;
