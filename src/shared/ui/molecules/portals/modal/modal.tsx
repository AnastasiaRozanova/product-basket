import { useRef, PropsWithChildren } from "react";
import { createPortal } from "react-dom";
import { Button } from "../../../atoms";
import styles from "./styles.module.scss";

type ModalProps = {
	isOpen: boolean;
	setOpen: (value: boolean) => void;
} & PropsWithChildren;

export const Modal = ({ children, isOpen, setOpen }: ModalProps) => {
	const portalNode = useRef(document.getElementById('modal-root'));

	if (!isOpen) {
		return null;
	}

	return createPortal(
			<div className={styles.modalOverlay}>
				<div className={styles.modal}>
					<Button
							icon="Cross"
							theme="transparent"
							className={styles.closeModal}
							onClick={() => setOpen(false)}
					/>
					{children}
				</div>
			</div>,
			portalNode.current ?? document.body,
	);
}
