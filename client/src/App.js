import { useContext, useEffect } from "react";
import { UserContext } from "./context/UserContext";
import axios from "axios";

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

	useEffect(() => {
		checkloggedIn();
	}, []);

	return (
		<div>
			<h1>Hi there</h1>
		</div>
	);
}

export default App;
