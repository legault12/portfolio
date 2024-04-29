import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./scorpion.png"
								alt="scorpion"
								className="work-image"
							/>
							<div className="work-title">Scorpion</div>
							<div className="work-subtitle">
								Web Developer
							</div>
							<div className="work-duration">2015 - 2022</div>
						</div>

						<div className="work">
							<img
								src="./scorpion.png"
								alt="scorpion"
								className="work-image"
							/>
							<div className="work-title">Scorpion</div>
							<div className="work-subtitle">
								Lead Enterprise Web Developer
							</div>
							<div className="work-duration">2022 - 2024</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
