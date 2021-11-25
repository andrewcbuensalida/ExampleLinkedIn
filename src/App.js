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
	// alternative to useSelector is connect(/*what parts of state do you want?*/,/*what actions to dispatch*/)(App) which you put on the bottom. connect returns a function, then you pass App into that function. mapStateToProps takes in a globalState. they say connect method is easier for testing because it decouples react from redux, but is harder to understand.
	// useSelector takes in a function that returns which portion of state we want
	// selectUser can also be written as state=>state.user.user
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	useEffect(() => {
		// listens to any auth change
		auth.onAuthStateChanged((userAuth) => {
			if (userAuth) {
				//user is logged in. this looks through all of the reducers and if there's a match of action creator of login, then that's what it runs
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
