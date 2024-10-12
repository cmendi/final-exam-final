import React, { useState } from "react";
import { POST, tokenKey } from "../services/fetcher";

const LoginReg = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		POST("/auth/login", { email, password }).then((data) => {
			localStorage.setItem(tokenKey, data.token);
		});
	};
	const handleRegister = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		POST("/auth/register", { email, password }).then((data) => {
			localStorage.setItem(tokenKey, data.token);
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
