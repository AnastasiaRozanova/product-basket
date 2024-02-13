import { FC } from 'react';
import { Scope } from 'effector';

export type Modal = {
    uuid: string;
    name: any;
    scope?: Scope;
    props?: Record<string, any>;
};

export type ModalName = `Modals.${string}`;

export const modalsRegistry = new Map<ModalName, FC<any>>();

export const register = ({ name, component }: { name: ModalName; component: FC<any> }) => {
    modalsRegistry.set(name, component);
};
