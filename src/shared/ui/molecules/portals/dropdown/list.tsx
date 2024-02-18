import { useRef } from "react";
import { createPortal } from "react-dom";
import { clsx } from "clsx";
import { Nullable } from "@/shared/types";
import { useClickOutside } from "@/shared/lib/hooks";
import styles from "./styles.module.scss";

type ListProps = {
	options: Array<Record<'label' | 'value', string>>;
	isOpen: boolean;
	onSelect: (option: Record<'label' | 'value', string>) => void;
	selectedOption: Nullable<Record<'label' | 'value', string>>;
	referenceElement: Nullable<Element>;
	onClickOutside?: () => void;
}

export const List = ({ options, isOpen, onSelect, selectedOption, referenceElement, onClickOutside }: ListProps) => {
	const portalNode = useRef(document.getElementById('dropdown-root'));

	useClickOutside({
		ref: portalNode,
		handler: (e) => {
			if (
				isOpen &&
				referenceElement &&
				e.target !== referenceElement &&
				!referenceElement?.contains(e.target as Node)
			) {
				onClickOutside?.();
			}
		},
	});

	if (!isOpen || !options.length) {
		return null;
	}

	return createPortal(
			<div className={styles.dropdownList}>
				{options.map((option) => (
					<div
						key={option.value}
						className={clsx(styles.dropdownOption, option.value === selectedOption?.value && styles.selectedOption)}
						onClick={() => onSelect(option)}
					>
						{option.label}
					</div>
				))}
			</div>,
			portalNode.current ?? document.body,
	);
}
