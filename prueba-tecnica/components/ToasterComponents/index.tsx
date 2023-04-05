import { forwardRef, useImperativeHandle, useMemo, useState } from 'react';
import styles from './styles.module.css';
import { useToastAutoClose, useToastPortal } from '../../hooks/ToasterHooks';
import ReactDOM from 'react-dom';
import { uuid } from '../../utils';

interface ToastProps{
    mode:string
    onClose?:any
    message:string
}
export const Toast = ({ mode, onClose, message }: ToastProps) => {
    const classes = useMemo(
        () => [styles.toast, styles[mode]].join(' '),
        [mode],
    );

    return (
        <div onClick={onClose} className={classes}>
            <div className={styles.message}>{message}</div>
        </div>
    );
};

export const ToastPortal = forwardRef(
    ({ autoClose = false, autoCloseTime = 5000 }: any, ref) => {
        const [toasts, setToasts] = useState<any>([]);
        const { loaded, portalId }: any = useToastPortal();

        useToastAutoClose({
            toasts,
            setToasts,
            autoClose,
            autoCloseTime,
        });

        const removeToast = (id: any) => {
            setToasts(toasts.filter((t: any) => t.id !== id));
        };

        useImperativeHandle(ref, () => ({
            addMessage(toast: ToastProps) {
                setToasts([...toasts, { ...toast, id: uuid() }]);
            },
        }));

        return loaded ? (
            ReactDOM.createPortal(
                <div className={styles.toastContainer}>
                    {toasts.map((t: any) => (
                        <Toast
                            key={t.id}
                            mode={t.mode}
                            message={t.message}
                            onClose={() => removeToast(t.id)}
                        />
                    ))}
                </div>,

                document.getElementById(portalId)!,
            )
        ) : (
            <></>
        );
    },
);