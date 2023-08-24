import { useContext, useEffect } from "react";
import { UserContext } from "./context/UserContext";
import './App.css'
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import SignUp from './pages/signUp/SignUp'
import NavBar from "./pages/navbar/NavBar";


function App() {
	const [userData, setUserData] = useContext(UserContext);

	const checkloggedIn = async () => {
		let token = localStorage.getItem("auth-token");
		if (token === null) {
			localStorage.setItem("auth-token", "");
			token = "";
		} else {
			const userRes = await axios.get("http://localhost:4000/api/users", {
				headers: { "x-auth-token": token },
			});

			setUserData({
				token,
				user: {
					id: userRes.data.data.user_id,
					display_name: userRes.data.data.user_name,
				},
			});
		}
	};

	const logout = () => {
		setUserData({
			token: undefined,
			user: undefined,
		});
	}
	useEffect(() => {
		checkloggedIn();
	}, []);

	return (
		<div className="App">
			
			<Router>
				<Routes>
					<Route
						path="/signup"
						element={
							<>
								<NavBar />
								<SignUp />
							</>
						}
					/>
					<Route
						path="/login"
						element={
							<>
								<NavBar />
								<Login />
							</>
						}
					/>

					<Route
						path="/"
						element={
							<>
								<NavBar /> <Home logout={logout} /> 
							</>
						}
					/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
