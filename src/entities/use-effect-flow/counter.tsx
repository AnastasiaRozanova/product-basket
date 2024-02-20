import { Button } from "@/shared/ui/atoms";
import { useEffect, useState, useLayoutEffect } from "react";
import styles from "./styles.module.scss";

export const Counter = () => {
	const [count1, setCount1] = useState(0);
	const [count2, setCount2] = useState(0);

	useEffect(() => {
		console.log('useEffect no dependency ran');

		return () => console.log('useEffect no dependency cleanup ran');
	});

	useLayoutEffect(() => {
		console.log('useLayoutEffect empty dependency ran');

		return () => console.log('useLayoutEffect empty dependency cleanup ran');
	}, []);

	useEffect(() => {
		console.log('useEffect empty dependency ran');

		return () => console.log('useEffect empty dependency cleanup ran');
	}, []);

	useEffect(() => {
		console.log('useEffect count1 as dependency ran');

		return () => console.log('useEffect count1 as dependency cleanup ran');
	}, [count1]);

	useEffect(() => {
		console.log('useEffect count2 as dependency ran');

		return () => console.log('useEffect count2 as dependency cleanup ran');
	}, [count2]);

	return (
			<div className={styles.countersWrap}>
				<div className={styles.counterWrap}>
					<Button theme="primary" onClick={() => setCount1((prev) => prev + 1)}>
						Increase First Counter
					</Button>
					<div>{count1}</div>
				</div>

				<div className={styles.counterWrap}>
					<Button theme="primary" onClick={() => setCount2((prev) => prev + 1)}>
						Increase Second Counter
					</Button>
					<div>{count2}</div>
				</div>
			</div>
	);
}
