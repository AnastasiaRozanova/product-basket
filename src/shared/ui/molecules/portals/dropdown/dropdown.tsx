import { useState } from "react";
import { clsx } from "clsx";
import { Nullable } from "@/shared/types";
import { Icons } from "../../../atoms/icons";
import { Tooltip } from "../tooltip";
import { List } from "./list";
import styles from "./styles.module.scss";

type DropdownProps = {
	options: Array<Record<'label' | 'value', string>>;
	label: string;
	tooltip?: string;
	onChange?: (option: Record<'label' | 'value', string>) => void;
}

export const Dropdown = ({ options, label, tooltip, onChange }: DropdownProps) => {
	const [isOpen, setOpen] = useState(false);
	const [selectedValue, setSelectedValue] = useState<Nullable<Record<'label' | 'value', string>>>(null);
	const [referenceElement, setReferenceElement] = useState<Nullable<Element>>(null);

	const onSelect = (option: Record<'label' | 'value', string>) => {
		setSelectedValue(option);
		setOpen(false);

		onChange?.(option);
	}

	return (
			<div className={styles.wrap}>
				<div className={styles.dropdownLabelWrap}>
					<label>{label}</label>
					{tooltip && <Tooltip tooltip={tooltip} />}
				</div>

				<div className={styles.dropdownWrap}>
					<div className={styles.dropdownButtonWrap}>
						<button
								ref={setReferenceElement}
								onClick={() => setOpen(prev => !prev)}
								className={styles.dropdownButton}
						>
							{selectedValue?.label || 'Выберите значение'}
						</button>

						<Icons.ChevronDown
								size={16}
								className={clsx(styles.dropdownButtonIcon, isOpen && styles.dropdownButtonIconUp)}
						/>
					</div>

					<List
							options={options}
							isOpen={isOpen}
							onSelect={onSelect}
							selectedOption={selectedValue}
							referenceElement={referenceElement}
							onClickOutside={() => setOpen(false)}
					/>
				</div>
			</div>
	);
}
