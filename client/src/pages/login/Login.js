import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import axios from "axios";


const Login = () => {
	const [userData, setUserData] = useContext(UserContext);
	const navigate = useNavigate(); 
	const [form, setForm] = useState({});

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
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
		} catch (err) {
			console.log("problem", err.response.data.msg);
			alert(err.response.data.msg);
		}
	};

	useEffect(() => {
		if (userData.user) navigate("/"); 
	}, [userData.user, navigate]);

	return (
		<div className="card">
			<>
				<h3>Login to your account</h3>
				<br />
				<p>
					Don't have an account?{" "}
					<Link className="link" data-panel=".panel-signup" to="/signup">
						Create a new account
					</Link>
				</p>
				<form onSubmit={handleSubmit} className="form-container">
					<label></label>
					<input type="text" placeholder="Email" onChange={handleChange} />
					<br /> <br />
					<label></label>
					<input
						type="password"
						placeholder="Password"
						onChange={handleChange}
					/>
					<br />
					<br />
					<button>Submit</button>
				</form>
				<br />
				<Link className="link" to="/signup">
					<p>Forgot password?</p>
				</Link>
			</>
		</div>
	);
};

export default Login;

// import { Link, useNavigate } from "react-router-dom";
// import React, { useContext, useEffect, useState } from "react";
// import { UserContext } from "../../context/UserContext";
// // import {Link, useNaviage} from "react-router-dom";
// import axios from "axios";

// const Login = () => {
// 	const [userData, setUserData] = useContext(UserContext);
// 	const navigate = useNaviage();
// 	const [form, setForm] = useState({});

//   const handleChange=(e)=>{
//     setForm({...form, [e.target.name]: e.target.value});
//   }

//   const handleSubmit = async(e)=>{
//     e.preventDefault();
//     try{
//       const loginRes = await axios.post('http://localhost:4000/api/users/login',
//       {
//         email: form.email,
//         password: form.password
//       });
//       setUserData({
//         token: loginRes.data.token,
//         user:loginRes.data.user
//       });
//       //set local storage with the token
//       localStorage.setItem('auth-token', loginRes.data.token);

//       //navigate user to homepage
//       navigate('/');
//     }catch (err) {
//       console.log('problem', err.response.data.msg);
//       alert(err.response.data.msg);
//     }
//   }

//   useEffect(()=> {
//     if(userData.use) navigate("/");
//   }, [userData.user, navigate]);

// 	return (
// 		<div>
// 			<h1>Login</h1>
// 			<form onSubmit={handleSubmit}>
// 				<lable>Email:</lable>
// 				<input type="text" name="email" onChange={handleChange} />
// 				<br />
//         <label>Password</label>
//         <input type="password" name="password" onChange={handleChange} /><br />
// 				<button>submit</button>
// 			</form>
// 			<Link to="/signup">Create a new account</Link>
// 		</div>
// 	);
// };

// export default Login;
