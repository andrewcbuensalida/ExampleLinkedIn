import React from "react";
import "./Header.css";
import { useDispatch } from "react-redux";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOption from "../HeaderOption/HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SuperVisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import { logout } from "../features/userSlice";
import { auth } from "../firebase";

function Header() {
	const dispatch = useDispatch();

	const logoutApp = () => {
		// dispatch is to change to local state, auth.signOut is to change the firebase state
		dispatch(logout());
		auth.signOut();
	};

	return (
		<div className="headerContainer">
			<div className="header">
				<div className="header_left">
					<img src="./images/merry.png" alt="merry" />
					<div className="header_search">
						<SearchIcon />
						<input placeholder="Search" type="text" />
					</div>
				</div>

				<div className="header_right">
					<HeaderOption Icon={HomeIcon} title="Home" />
					<HeaderOption
						Icon={SuperVisorAccountIcon}
						title="My Network"
					/>
					<HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
					<HeaderOption Icon={ChatIcon} title="Messaging" />
					<HeaderOption
						Icon={NotificationsIcon}
						title="Notifications"
					/>
					<HeaderOption
						avatar={true}
						onClick={logoutApp}
						title="me"
					/>
				</div>
			</div>
		</div>
	);
}

export default Header;
