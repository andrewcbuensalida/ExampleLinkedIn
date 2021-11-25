import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../firebase";
import { login } from "../features/userSlice";
import "./Login.css";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [profilePicture, setProfilePicture] = useState("");
	const dispatch = useDispatch();
	const register = () => {
		if (!name) {
			return alert("Please enter a full name!!!");
		}
		auth.createUserWithEmailAndPassword(email, password)
			.then((userAuth) => {
				userAuth.user
					.updateProfile({
						// displayName and photoURL shouldn't be changed because it's from firebase. cant access these from firebase
						displayName: name,
						photoURL: profilePicture,
					})
					.then(() => {
						// dispatch changes local state so that firestore state will be the same
						dispatch(
							// this stuff is from firebase. it becomes the action.payload in the userSlice
							login({
								email: userAuth.user.email,
								uid: userAuth.user.uid,
								displayName: name,
								photoURL: profilePicture,
							})
						);
					});
			})
			.catch((error) => alert(error));
	};
	const loginToApp = (e) => {
		e.preventDefault();

		auth.signInWithEmailAndPassword(email, password)
			.then((userAuth) => {
				dispatch(
					login({
						email: userAuth.user.email,
						uid: userAuth.user.uid,
						displayName: userAuth.user.displayName,
						photoURL: userAuth.user.photoURL,
					})
				);
			})
			.catch((error) => alert(error));
	};

	return (
		<div className="login">
			<img src="./images/merry.png" alt="" />
			Demo email is demo@demo.com and password is 123456
			<form>
				<input
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder="Full name"
					type="text"
				/>
				<input
					value={profilePicture}
					onChange={(e) => setProfilePicture(e.target.value)}
					placeholder="Profile pic URL (optional)"
					type="text"
				/>
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Email"
					type="email"
				/>
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Password"
					type="password"
				/>
				<button type="submit" onClick={loginToApp}>
					Sign In
				</button>
				<p>
					Not a Member
					<span className="login__register" onClick={register}>
						Register Now
					</span>
				</p>
			</form>
		</div>
	);
}

export default Login;
