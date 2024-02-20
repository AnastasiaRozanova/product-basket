import { createEvent, createStore, sample } from "effector";
import { Form } from "@/shared/types";

const $order = createStore<Form[]>([]);

const setOrder = createEvent<Form>();
const deleteOrder = createEvent<number>();

sample({
	clock: setOrder,
	source: $order,
	fn: (order, addedToOrder) => [...order, addedToOrder],
	target: $order
})

sample({
	clock: deleteOrder,
	source: $order,
	fn: (order, deleteOrderIndex) => order.filter((_, index) => index !== deleteOrderIndex),
	target: $order
})

export const model = {
	$order,
	setOrder,
	deleteOrder
}
