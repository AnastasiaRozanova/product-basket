import { PropsWithChildren, useCallback, useEffect, useRef } from 'react';
import clsx from 'clsx';
import { useOutsideClick } from '../../hooks';
import { Button } from '../../../ui/atoms';
import { model } from '../model';
import styles from './styles.module.scss';

type ModalProps = PropsWithChildren<{
    onClose?: () => void;
    className?: string;
    shouldCloseOnEsc?: boolean;
    contrastClose?: boolean;
}>;

export const Modal = ({
    children,
    onClose,
    shouldCloseOnEsc = true,
    contrastClose,
    className,
}: ModalProps) => {
    const ref = useRef<HTMLDivElement>(null);

    const handleClose = useCallback(() => {
        if (onClose) {
            onClose?.();
        } else {
            model.closeActive();
        }
    }, [onClose]);

    const closeOnEscape = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape' && shouldCloseOnEsc) {
                handleClose();
            }
        },
        [handleClose, shouldCloseOnEsc],
    );

    useEffect(() => {
        window.addEventListener('keydown', closeOnEscape);

        return () => window.removeEventListener('keydown', closeOnEscape);
    }, [closeOnEscape]);

    useOutsideClick(ref, () => model.closeActive());

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.underlayGrid}>
                <div className={styles.underlayCell}>
                    <div ref={ref} className={clsx(styles.modal, className)}>
                        <Button
                            icon="Cross"
                            theme="transparent"
                            className={clsx(
                                styles.closeModal,
                                contrastClose && styles.closeModal_contrast,
                            )}
                            onClick={handleClose}
                        />

                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};
