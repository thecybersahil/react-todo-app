import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { server } from "../main";
import toast from "react-hot-toast";

const Register = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const submitHandler = async (e) => {
		try {
			e.preventDefault();
			const { data } = await axios.post(
				`https://nodejs-todoapp-85c3.onrender.com/api/v1/users/new`,
				{
					name,
					email,
					password,
				},
				{
					headers: {
						"Content-Type": "application/json",
					},
					withCredentials: true,
				}
			);
			toast.success(data.message);
		} catch (error) {
			toast.error("Some error");
			console.log(error);
		}
	};
	return (
		<div className="login">
			<section>
				<form onSubmit={submitHandler}>
					<input
						value={name}
						type="text"
						placeholder="Name"
						required
						onChange={(e) => setName(e.target.value)}
					/>
					<input
						value={email}
						type="email"
						placeholder="Email"
						required
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						value={password}
						type="password"
						required
						placeholder="Password"
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button type="submit">Sign Up</button>
					<h4>Or</h4>
					<Link to="/login">Log In</Link>
				</form>
			</section>
		</div>
	);
};

export default Register;
