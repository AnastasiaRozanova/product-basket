import { useRef, useEffect, MutableRefObject, useState } from "react";
import { createPortal } from "react-dom";
import { Nullable } from "@/shared/types";
import styles from "./styles.module.scss";

type TooltipFieldProps = {
	tooltip: string;
	elementRef: MutableRefObject<Nullable<HTMLElement>>;
};

export const TooltipField = ({ tooltip, elementRef }: TooltipFieldProps) => {
	const portalNode = useRef(document.getElementById('tooltip-root'));

	const [isVisible, setVisible] = useState(true);

	useEffect(() => {
		const showTooltip = () => setVisible(true)
		const hideTooltip = () => setVisible(false)

		elementRef.current?.addEventListener('mouseenter', showTooltip);
		elementRef.current?.addEventListener('mouseleave', hideTooltip);

		return () => {
			elementRef.current?.removeEventListener('mouseenter', showTooltip);
			elementRef.current?.removeEventListener('mouseleave', hideTooltip);
		}
	}, []);

	const element = elementRef?.current?.getBoundingClientRect();
	const tooltipLeft = element?.x ? element.x - 7 : 0;
	const tooltipTop = element?.y ? element.y - 50 : 0;

	if (!isVisible) {
		return null;
	}

	return createPortal(
			<div className={styles.tooltip} style={{ left: tooltipLeft, top: tooltipTop }}>
				<div className={styles.tooltipContent}>
					{tooltip}
				</div>
			</div>,
			portalNode.current ?? document.body,
	);
}
