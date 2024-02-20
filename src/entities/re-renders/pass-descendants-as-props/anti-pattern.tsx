import { useState } from "react";

const VerySlowComponent = () => {
	console.log('Pass descendants as props ANTI-PATTERN: very slow component RENDER');

	return <div>Very slow component</div>;
};

export const PassDescendantsAsPropsAntiPattern = () => {
	const [state, setState] = useState(1);

	const onClick = () => {
		setState(state + 1);
	};

	console.log('Pass descendants as props ANTI-PATTERN RENDER');

	return (
			<>
				<button onClick={onClick}>click here</button>
				<VerySlowComponent />
			</>
	);
};
