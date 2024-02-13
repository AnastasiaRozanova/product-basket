import { forwardRef, InputHTMLAttributes, useId } from 'react';
import { Controller } from 'effector-react-form';
import { clsx } from 'clsx';
import styles from './styles.module.scss';

type InputProps = {
	controller?: Controller;
	label?: string;
	className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(({ label, controller, className, ...props }, ref) => {
	const { input } = controller?.() || {};

	const id = useId();

	const inputProps = {
		...input,
		...props,
		ref,
		id
	};


	return (
			<div className={styles.inputWrap}>
				{label && <label className={styles.inputLabel} htmlFor={id}>{label}</label>}

				<input className={clsx(styles.input, className)} {...inputProps} />
			</div>
	)
});
