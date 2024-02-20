import { createEvent, createStore, sample } from "effector";
import { createGate } from "effector-react";

import { modalsModel, ModalsRegistry } from "@/shared/lib/modals";

const startOrder = createEvent();

const gate = createGate<{ modalName: keyof typeof ModalsRegistry}>();

sample({
	clock: startOrder,
	source: gate.state,
	fn: ({ modalName }) => ({
		name: ModalsRegistry[modalName]
	}),
	target: modalsModel.addModal,
});

export const model = {
	startOrder,
	gate
}
