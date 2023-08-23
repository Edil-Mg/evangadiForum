import { Link, useNavigate } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import axios from "axios";

const Login = () => {
	const [userData, setUserData] = useContext(UserContext);
	const navigate = useNavigate(); // Fixed: useNavigate instead of useNaviage
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
			navigate("/"); // Navigate correctly
		} catch (err) {
			console.log("problem", err.response.data.msg);
			alert(err.response.data.msg);
		}
	};

	useEffect(() => {
		if (userData.user) navigate("/"); // Navigate correctly
	}, [userData.user, navigate]);

	return (
		<div>
			<h1>Login</h1>
			<form onSubmit={handleSubmit}>
				<label>Email:</label>
				<input type="text" name="email" onChange={handleChange} />
				<br />
				<label>Password</label>
				<input type="password" name="password" onChange={handleChange} />
				<br />
				<button>Submit</button>
			</form>
			<Link to="/signup">Create a new account</Link>
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
