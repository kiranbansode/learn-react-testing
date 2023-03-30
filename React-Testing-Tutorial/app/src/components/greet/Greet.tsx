import { GreetProps } from "./Greet.types";

export const Greet = (props: GreetProps) => (
	<div>Hello {props.name ? props.name : "Guest"}</div>
);
