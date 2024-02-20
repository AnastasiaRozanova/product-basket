import { createEvent, sample } from "effector";
import { createForm } from "effector-forms";
import { createGate } from "effector-react";
import { EMPTY_ORDER } from "@/shared/lib/constants";
import { BasketItem } from "@/shared/types";

type Form = {
	user: string;
	order: Array<BasketItem>
}

const form = createForm<Form>({
	fields: {
		user: {
			init: '',
		},
		order: {
			init: [EMPTY_ORDER],
		},
	},
});

const addToOrder = createEvent<BasketItem & { id: number }>();

sample({
	//@ts-ignore
	clock: addToOrder,
	source: form.$values,
	fn: (values: Form, addedToOrder: BasketItem) => ({ ...values, order: [...values.order, addedToOrder] }),
	target: form.setForm
})

const removeFromOrder = createEvent<number>();

sample({
	//@ts-ignore
	clock: removeFromOrder,
	source: form.$values,
	fn: (values: Form, removeId: number) => {
		const slicedOrder = values.order.filter((elem) => elem.id !== removeId);
		return { ...values, order: slicedOrder }
	},
	target: form.setForm
})

const gate = createGate();

sample({
	//@ts-ignore
	clock: gate.close,
	target: form.reset
})

export const model = {
	form,
	addToOrder,
	removeFromOrder
};
