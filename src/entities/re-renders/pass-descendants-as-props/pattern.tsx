import { ReactNode, useState } from "react";

const VerySlowComponent = () => {
	console.log('Pass descendants as props PATTERN: very slow component RENDER');

	return <div>Very slow component</div>;
};

const ComponentWithClick = ({ children }: { children: ReactNode }) => {
	const [state, setState] = useState(1);

	const onClick = () => {
		setState(state + 1);
	};

	console.log('Pass descendants as props PATTERN RENDER');

	return (
			<>
				<button onClick={onClick}>click here</button>
				{children}
			</>
	);
};

export const PassDescendantsAsPropsPattern = () => {
	return (
			<ComponentWithClick>
				<VerySlowComponent />
			</ComponentWithClick>
	);
};
