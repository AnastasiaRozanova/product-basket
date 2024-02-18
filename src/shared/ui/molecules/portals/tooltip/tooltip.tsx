import { Nullable } from "@/shared/types";
import { Icons } from "@/shared/ui/atoms/icons";
import { useRef } from "react";
import { TooltipField } from "./tooltip-field";
import styles from './styles.module.scss';

type TooltipProps = {
	tooltip: string;
}

export const Tooltip = ({ tooltip }: TooltipProps) => {
	const ref = useRef<Nullable<HTMLDivElement>>(null);

	return (
			<div className={styles.tooltipIcon}>
				<div ref={ref}>
					<Icons.InfoCircle size={20} />
				</div>

				<TooltipField tooltip={tooltip} elementRef={ref} />
			</div>
	);
}
