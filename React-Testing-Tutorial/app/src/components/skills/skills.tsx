import { useState } from "react";
import { SkillProps } from "./skills.types";

export const Skills = (props: SkillProps) => {
	const { skills } = props;
	const [isLoggedIn, setIsLogged] = useState(false);

	return (
		<>
			<ul>
				{skills.map((skill) => {
					return <li key={skill}>{skill}</li>;
				})}
			</ul>
			{isLoggedIn ? (
				<button>Start learning</button>
			) : (
				<button
					onClick={() => {
						setIsLogged(true);
					}}
				>
					Login
				</button>
			)}
		</>
	);
};
