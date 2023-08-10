import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link className="nav-link" to={"/"}>Home</Link>
				<Link className="nav-link" to={"/signup"}>Signup</Link>
				<Link className="nav-link" to={"/login"}>Login</Link>
				<Link className="nav-link" to={"/private"}>Private</Link>
				<button type="button" className="btn btn-secondary">Logout</button>
			</div>
		</nav>
	);
};
