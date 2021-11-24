import React from "react";
import "./InputOption.css";

// this is in the top of the feed. the options to post a photo, video, etc
function InputOption({ Icon, title, color }) {
	return (
		<div className="inputOption">
			<Icon style={{ color: color }} />
			<h4>{title}</h4>
		</div>
	);
}

export default InputOption;
