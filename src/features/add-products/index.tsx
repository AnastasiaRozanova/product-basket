import { useUnit } from 'effector-react';
import { useFieldArray, useForm } from 'effector-react-form';

import { EMPTY_ORDER } from './lib';
import { model } from './model';
import styles from './styles.module.scss';

import { OrderForm } from '@/entities/order-form';
import { Modal, modalsModel } from '@/shared/lib/modals';
import { Button, Input } from '@/shared/ui/atoms';

export const AddProducts = () => {
	const closeModal = useUnit(modalsModel.closeActive);

	const { controller, handleSubmit } = useForm({ form: model.form });

	const { map, push, remove } = useFieldArray({ fieldArray: model.orderFields, name: 'order' });

	return (
			<Modal className={styles.modalWrap}>
				<h3 className={styles.modalTitle}>Мои покупки</h3>

				<form className={styles.form} onSubmit={handleSubmit}>
					<Input
						label="Покупатель"
						placeholder="Введите имя"
						controller={controller({ name: 'userName' })}
					/>

					{map(({ formItemName, field, index }) => (
						<OrderForm
							key={field.id}
							field={field}
							formItemName={formItemName}
							controller={controller}
							index={index}
							onDelete={remove}
						/>
					))}

					<Button
						icon="Plus"
						theme="ghost"
						type="button"
						onClick={() => push(EMPTY_ORDER)}
					>
						Добавить новый продукт в заказ
					</Button>

					<div className={styles.modalButtons}>
						<Button type="button" onClick={closeModal}>Отмена</Button>
						<Button type="submit" theme="primary">
							Закончить покупки
						</Button>
					</div>
				</form>
			</Modal>
	)
};
