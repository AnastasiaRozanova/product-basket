import { useEffect, useState } from "react";
import { Counter } from "./counter";
import styles from './styles.module.scss';

export const UseEffectFlow = () => {
	const [showCounter, setShowCounter] = useState(false);

	useEffect(() => {
		console.log('PARENT useEffect empty dependency ran');

		return () => console.log('PARENT useEffect empty dependency cleanup ran');
	}, []);

	return (
			<div className={styles.mainWrap}>
				<div className={styles.toggleWrap}>
					<label htmlFor="toggleCounter">Toggle Counter: </label>
					<input
							id="toggleCounter"
							type="checkbox"
							checked={showCounter}
							onChange={({ target }) => setShowCounter(target.checked)}
					/>
				</div>

				{showCounter && <Counter />}
			</div>
	);
}
