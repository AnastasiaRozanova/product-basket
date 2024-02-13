import {  sample } from 'effector';
import { createForm, createFieldArray } from 'effector-react-form';

import { EMPTY_ORDER } from './lib';

import { userOrderListModel } from '@/entities/user-order-list';
import { Form } from '@/shared/types';
import { modalsModel } from '@/shared/lib/modals';

const form = createForm<Form>({
	initialValues: {
		userName: '',
		order: [EMPTY_ORDER]
	}
});

const orderFields = createFieldArray({
	form,
});

sample({
	clock: form.onSubmit,
	fn: ({ values }) => values,
	target: userOrderListModel.setOrder
})

sample({
	clock: form.onSubmit,
	target: modalsModel.closeActive
})

export const model = {
	form,
	orderFields
}
