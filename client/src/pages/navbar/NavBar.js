import React from 'react'
import "./navBar.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";



const NavBar = () => {
  return (
		<div className="nav_bar">
			<div className="container">
				<Link to="/"className="logo">
					<img src="https://www.evangadi.com/themes/humans//assets/images/misc/evangadi-logo-home.png"></img>
				</Link>
				<div className="nav_list">
					<p className="home">Home</p>
					<p className="about">How it works</p>
					<button className="sign">Signin</button>
				</div>
			</div>
		</div>
	);
}

export default NavBar













//   (
// 		<div>
// 			<nav className="navbar navbar-expand-lg ">
// 				<Link to="/">
// 					<img src="https://www.evangadi.com/themes/humans//assets/images/misc/evangadi-logo-home.png"></img>
// 				</Link>
// 				<button
// 					className="navbar-toggler"
// 					type="button"
// 					data-toggle="collapse"
// 					data-target="#navbarNav"
// 					aria-controls="navbarNav"
// 					aria-expanded="false"
// 					aria-label="Toggle navigation"
// 				>
// 					<span className="navbar-toggler-icon"></span>
// 				</button>
// 				<div className="collapse navbar-collapse" id="navbarNav">
// 					<ul className="navbar-nav ml-auto">
// 						<li className="nav-item active">
// 							<a className="nav-link" href="#">
// 								Home <span className="sr-only"></span>
// 							</a>
// 						</li>
// 						<li className="nav-item">
// 							<a className="nav-link" href="#">
// 								How it works
// 							</a>
// 						</li>
// 						<li className="nav-item">
// 							<button className="nav-link" href="#">
// 								SIGN IN
// 							</button>
// 						</li>
// 					</ul>
// 				</div>
// 			</nav>
// 		</div>
// 	);