import { useGate, useUnit } from 'effector-react';

import { model } from './model';

import { Button } from "@/shared/ui/atoms";
import { ModalsRegistry } from '@/shared/lib/modals';

type AddOrderProps = {
	textContent: string;
	modalName: keyof typeof ModalsRegistry;
}

export const AddOrder = ({ textContent, modalName } :AddOrderProps) => {
	const startOrder = useUnit(model.startOrder);

	useGate(model.gate, { modalName });

	return (<Button theme='danger' onClick={startOrder}>{textContent}</Button>)
}
