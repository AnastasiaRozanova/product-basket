import { memo, useState } from "react";

const NestedChild = memo(() => {
	console.log('render NestedChild');

	return <p>Nested Child</p>;
});

const Child = (props: any) => {
	console.log('render Child');

	return <div>{props.component}</div>;
};

export const MemoComponentsWithProps = () => {
	const [count, setCount] = useState(0);

	console.log('render App');

	return (
			<>
				<Child component={<NestedChild />} />
				<button onClick={() => setCount((prev) => prev + 1)}>
					click count {count}
				</button>
			</>
	);
};
