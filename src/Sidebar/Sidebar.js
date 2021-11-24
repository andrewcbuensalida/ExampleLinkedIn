import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import "./Sidebar.css";

function Sidebar() {
	// getting state from redux store
	const user = useSelector(selectUser);

	const recentItem = (topic) => (
		<div className="sidebar__recentItem">
			<span className="sidebar__hash">#{topic}</span>
		</div>
	);

	return (
		<div className="sidebar">
			<div className="sidebar__top">
				<img
					src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/733a7067-63b8-4a0a-a028-56c699307764/d1jen8h-83fe51a8-9abb-4b4e-a4c5-abb34626ac53.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzczM2E3MDY3LTYzYjgtNGEwYS1hMDI4LTU2YzY5OTMwNzc2NFwvZDFqZW44aC04M2ZlNTFhOC05YWJiLTRiNGUtYTRjNS1hYmIzNDYyNmFjNTMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.cbiBeY-KnkspBdGCD4GGX31tYdqZmv1YSOHc0BCzIFY"
					alt=""
				/>
				<Avatar src={user?.photoURL} className="sidebar__avatar">
					{user.email[0]}
				</Avatar>
				<h2>{user.displayName}</h2>
				<h4>{user.email}</h4>
			</div>

			<div className="sidebar__stats">
				<div className="sidebar__stat">
					<p>Who viewed u</p>
					<p className="sidebar__statNumber">2,533</p>
				</div>
				<div className="sidebar__stat">
					<p>Views on post</p>
					<p className="sidebar__statNumber">2,448</p>
				</div>
			</div>

			<div className="sidebar__bottom">
				<p>Recent</p>
				{recentItem("reactjs")}
				{recentItem("rea")}
				{recentItem("developer")}
				{recentItem("develop")}
			</div>
		</div>
	);
}

export default Sidebar;
