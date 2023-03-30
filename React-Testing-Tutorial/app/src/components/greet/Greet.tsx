type GreetProps = {
	name?: string;
};

export const Greet = (props: GreetProps) => <div>Hello {props.name}</div>;
