import { ReactNode, useState } from "react";

const Left = () => {
	console.log('Pass components as props PATTERN: LEFT RENDER');

	return <div>Left</div>;
};

const Right = () => {
	console.log('Pass components as props PATTERN: RIGHT RENDER');

	return <div>Right</div>;
};

const ComponentWithClick = ({
	left,
	right,
}: {
	left: ReactNode;
	right: ReactNode;
}) => {
	const [state, setState] = useState(1);

	const onClick = () => {
		setState(state + 1);
	};

	console.log('Pass components as props PATTERN RENDER');

	return (
			<>
				{left}
				<button onClick={onClick}>click here</button>
				{right}
			</>
	);
};

export const PassComponentsAsPropsPattern = () => {
	return <ComponentWithClick left={<Left />} right={<Right />} />;
};

