import { useEffect, MutableRefObject } from 'react';

export const useOutsideClick = (
		ref: MutableRefObject<HTMLElement | null> | MutableRefObject<HTMLElement | null>[],
		handler: (event: MouseEvent | TouchEvent) => void,
) => {
	useEffect(() => {
		const refsArray = Array.isArray(ref) ? ref : [ref];

		const handleClick = (event: MouseEvent | TouchEvent) => {
			if (
					refsArray.some(
							(itemRef) =>
									!itemRef.current || itemRef.current.contains(event.target as Element),
					)
			) {
				return;
			}

			handler(event);
		};

		document.addEventListener('click', handleClick, true);

		return () => {
			document.removeEventListener('click', handleClick, true);
		};
	}, [ref, handler]);
};
