import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Feed from "./Feed/Feed";
import Login from "./Login/Login";
import Widgets from "./Widgets/Widgets";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, logout, login } from "./features/userSlice";
import { auth } from "./firebase";

function App() {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	useEffect(() => {
		// listens to any auth change
		auth.onAuthStateChanged((userAuth) => {
			if (userAuth) {
				//user is logged in
				dispatch(
					login({
						email: userAuth.email,
						uid: userAuth.uid,
						displayName: userAuth.displayName,
						photoURL: userAuth.photoURL,
					})
				);
			} else {
				//user logged out
				dispatch(logout());
			}
		});
	}, []);

	return (
		<div className="App">
			{!user ? (
				<Login />
			) : (
				<>
					<Header />
					<div className="app_body">
						<Sidebar />
						<Feed />
						<Widgets />
					</div>
				</>
			)}
		</div>
	);
}

export default App;
