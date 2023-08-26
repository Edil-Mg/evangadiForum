import React, { useContext, useState } from "react";
import "./signUp.css"
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import axios from "axios";

const SignUp = () => {
	const [form, setform] = useState({});
	const navigate = useNavigate();
	const [userData, setUserData] = useContext(UserContext);

	const handleChange = (e) => {
		setform({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const formData = {
			firstName: form.firstName,
			lastName: form.lastName,
			userName: form.userName,
			email: form.email,
			password: form.password,
		};
		try {
			await axios.post("http://localhost:4000/api/users", form);
			const loginRes = await axios.post(
				"http://localhost:4000/api/users/login",
				{
					email: form.email,
					password: form.password,
				}
			);

			setUserData({
				token: loginRes.data.token,
				user: loginRes.data.user,
			});

			localStorage.setItem("auth-token", loginRes.data.token);
			navigate("/");
		} catch (error) {
			console.log("problem ==>", error.response.data.msg);
		}
	};
	return (
		<div className="card">
			<h3>SignUp</h3>
			<br />
			<form onSubmit={handleSubmit} className="form-container2">
				<lable></lable>
				<input type="text" placeholder="First Name" onChange={handleChange} />
				<br />
				<br />
				<label></label>
				<input type="text" placeholder="Last Name:" onChange={handleChange} />
				<br />
				<br />
				<label></label>
				<input type="text" placeholder="userName" onChange={handleChange} />
				<br />
				<br />
				<label> </label>
				<input type="text" placeholder="Email" onChange={handleChange} className="email"/>
				<br />
				<br />
				<label></label>
				<input type="text" placeholder="Password" onChange={handleChange} />
				<br />
				<br />
				<button>submit</button>
			</form>
			<br />
			<Link className="link" to="/login">
				Already have an account?
			</Link>
			<br />
		</div>
	);
};

export default SignUp;
