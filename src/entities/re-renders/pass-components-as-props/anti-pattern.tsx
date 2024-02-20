import { ReactNode, useState } from "react";

const Left = () => {
	console.log('Pass components as props ANTI-PATTERN: LEFT RENDER');

	return <div>Left</div>;
};

const Right = () => {
	console.log('Pass components as props ANTI-PATTERN: RIGHT RENDER');

	return <div>Right</div>;
};

export const PassComponentsAsPropsAntiPattern = () => {
	const [state, setState] = useState(1);

	const onClick = () => {
		setState(state + 1);
	};

	console.log('Pass components as props ANTI-PATTERN RENDER');

	return (
			<>
				<Left />
				<button onClick={onClick}>click here</button>
				<Right />
			</>
	);
};

