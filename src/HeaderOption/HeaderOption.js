import React from "react";
import "./HeaderOption.css";
import { Avatar } from "@material-ui/core";
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";

function HeaderOption({ Icon, title, avatar, onClick }) {
	const user = useSelector(selectUser);
	console.log(`This is user`);
	console.log(user);

	return (
		<div onClick={onClick} className="header-option">
			{Icon && <Icon className="headerOption__icon" />}
			{avatar && (
				<Avatar src={user?.photoUrl} className="headerOption__icon">
					{user?.email[0]}
				</Avatar>
			)}
			<h3 className="headerOption__title">{title}</h3>
		</div>
	);
}

export default HeaderOption;
