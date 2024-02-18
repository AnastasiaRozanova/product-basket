import { MutableRefObject, useLayoutEffect } from 'react';

type ClickOutsideProps = {
	ref: MutableRefObject<any> | MutableRefObject<any>[];
	handler: (event: MouseEvent | TouchEvent) => void;
	shouldListen?: boolean;
};

export const useClickOutside = ({ ref, handler, shouldListen = true }: ClickOutsideProps) => {
	useLayoutEffect(() => {
		const listener = (event: MouseEvent | TouchEvent) => {
			const refsArray = Array.isArray(ref) ? ref : [ref];

			if (
					refsArray.some(
							(itemRef) => !itemRef.current || itemRef.current.contains(event.target),
					)
			) {
				return;
			}

			handler(event);
		};

		if (shouldListen) {
			document.addEventListener('touchstart', listener);
			document.addEventListener('mousedown', listener);
		} else {
			document.removeEventListener('touchstart', listener);
			document.removeEventListener('mousedown', listener);
		}

		return () => {
			document.removeEventListener('touchstart', listener);
			document.removeEventListener('mousedown', listener);
		};
	}, [handler, ref, shouldListen]);
};
