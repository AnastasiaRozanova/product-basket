import { useState, useEffect } from "react";

export const CompositionAntiPattern = () => {
	const [state, setState] = useState(1);

	const onClick = () => {
		setState(state + 1);
	};

	const VerySlowComponent = () => {
		useEffect(() => {
			console.log('Composition ANTI-PATTERN: very slow component mount');

			return () => {
				console.log('Composition ANTI-PATTERN: very slow component unmount');
			}
		}, []);
		return <div>Very slow component</div>;
	};

	return (
			<>
				<button onClick={onClick}>click here</button>
				<VerySlowComponent />
			</>
	);
};
