import { memo, useState } from "react";

const Child = memo(() => {
	console.log('Without props: child render');

	return <div>Child</div>;
});

export const MemoComponentsWithoutProps = () => {
	const [state, setState] = useState(1);
	console.log('Without props: parent render');

	const onClick = () => {
		setState(state + 1);
	};

	return (
			<>
				<Child />
				<button onClick={onClick}>click here</button>
			</>
	);
};
