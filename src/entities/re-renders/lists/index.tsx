import { memo } from "react";

const MemoChild = memo(({ content }: { content: string }) => (<li>{content}</li>));

export const ListWithMappedElements = () => {
	const items = [
		{ name: 'Апельсины', id: 1},
		{ name: 'Бананы', id: 1},
		{ name: 'Яблоки', id: 1},
		{ name: 'Мандарины', id: 1}
	];

	return (
			<>
				{items.map(({ name, id }) => <MemoChild key={id} content={name} />)}
			</>
	)
}
