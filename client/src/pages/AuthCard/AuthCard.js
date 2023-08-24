import React, { useState } from "react";
import SignUp from "../signUp/SignUp";
import Login from "../login/Login";
import NavBar from "../navbar/NavBar";

const AuthCard = () => {
	const [activeCard, setActiveCard] = useState("signup"); // 'signup' or 'login'

	const toggleCard = () => {
		setActiveCard(activeCard === "signup" ? "login" : "signup");
	};

	return (
		<>
			<NavBar />
			<div className="auth-card-container">
				<div className={`auth-card ${activeCard === "signup" ? "active" : ""}`}>
					<SignUp />
				</div>
				<div className={`auth-card ${activeCard === "login" ? "active" : ""}`}>
					<Login />
				</div>
				<button onClick={toggleCard}>
					Switch to {activeCard === "signup" ? "Login" : "SignUp"}
				</button>
			</div>
		</>
	);
};

export default AuthCard;
