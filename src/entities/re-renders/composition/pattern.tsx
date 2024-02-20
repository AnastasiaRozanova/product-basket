import { useState, useEffect } from "react";

const VerySlowComponent = () => {
	useEffect(() => {
		console.log('Composition PATTERN: very slow component mount');

		return () => {
			console.log('Composition PATTERN: very slow component unmount');
		}
	}, []);
	return <div>Very slow component</div>;
};

export const CompositionPattern = () => {
	const [state, setState] = useState(1);

	const onClick = () => {
		setState(state + 1);
	};

	return (
			<>
				<button onClick={onClick}>click here</button>
				<VerySlowComponent />
			</>
	);
};
