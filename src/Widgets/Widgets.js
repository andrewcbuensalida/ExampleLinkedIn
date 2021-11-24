import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
	const newsArticle = (heading, subtitle) => (
		<div className="widgets__article">
			<div className="widgets__articleLeft">
				<FiberManualRecordIcon />
			</div>
			<div className="widgets__articleRight">
				<h4>{heading}</h4>
				<p>{subtitle}</p>
			</div>
		</div>
	);

	return (
		<div className="widgets">
			<div className="widgets__header">
				<h2>News</h2>
				<InfoIcon />
			</div>

			{newsArticle(
				"Andrew gets hired in his dream company",
				"He is on his way to do great things."
			)}
			{newsArticle(
				"Covid is gone for good",
				"The vaccines and social distancing worked."
			)}
			{newsArticle("Cancer is cured", "AI discovered it")}
		</div>
	);
}

export default Widgets;
