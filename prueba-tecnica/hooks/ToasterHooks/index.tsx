import { useState, useEffect } from 'react';
import { uuid } from '../../utils';

export const useToastPortal = () => {
    const [loaded, setLoaded] = useState(false);
    const [portalId] = useState<any>(`toast-portal-${uuid()}`);

    const test = () => {
        const div = document.createElement('div');
        div.id = portalId;
        div.setAttribute('style', 'position: fixed; top: 10px; right: 10px');
        document.getElementsByTagName('body')[0].prepend(div);

        setLoaded(true);

        return () => document.getElementsByTagName('body')[0].removeChild(div);
    }
    useEffect(() => {
        test()
    }, [portalId]);

    return { loaded, portalId };
};
export const useToastAutoClose = ({
    toasts,
    setToasts,
    autoClose,
    autoCloseTime,
}: any) => {
    const [removing, setRemoving] = useState('');

    useEffect(() => {
        if (removing) {
            setToasts((t: any) => t.filter((_t: any) => _t.id !== removing));
        }
    }, [removing, setToasts]);

    useEffect(() => {
        if (autoClose && toasts.length) {
            const id = toasts[toasts.length - 1].id;
            setTimeout(() => setRemoving(id), autoCloseTime);
        }
    }, [toasts, autoClose, autoCloseTime]);
};