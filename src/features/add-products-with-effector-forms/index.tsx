import { useId, useEffect, ChangeEvent, FormEvent } from "react";
import { useField, useForm } from "effector-forms";
import { useUnit } from "effector-react";

import { model } from "./model";
import styles from "./styles.module.scss";

import { Button } from "@/shared/ui/atoms";
import { Modal, modalsModel } from "@/shared/lib/modals";
import { BasketItem, Form, FormKeys } from "@/shared/types";
import { EMPTY_ORDER, formLabelsMapping } from "@/shared/lib/constants";

export const AddProductsWithEffectorForms = () => {
	const id = useId();

	const [addToOrder, removeFromOrder, closeModal] = useUnit([
		model.addToOrder,
		model.removeFromOrder,
		modalsModel.closeActive
	]);

	const { values } = useForm(model.form);

	const { value: user, onChange: onUserChange } = useField(model.form.fields.user);
	const { set, value: order } = useField(model.form.fields.order);

	const changeOrderHandler = (field: BasketItem, formField: string) => (event: ChangeEvent<HTMLInputElement>) => {
		const changedOrder = order.map((item) => {
			if (item.id === field.id) {
				return { ...item, [formField]: event.target.value }
			}
			return item;
		});

		set(changedOrder);
	}

	const submitHandler = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log('VAlUES ', values);
		closeModal();
	}

	return (
			<Modal className={styles.modalWrap}>
				<h3 className={styles.modalTitle}>Мои покупки c effector-forms</h3>

				<form className={styles.form} onSubmit={submitHandler}>
					<div className={styles.formField}>
						<label htmlFor={id}>Имя покупателя</label>
						<input
							id={id}
							className={styles.formFieldInput}
							value={user}
							onChange={(e) => onUserChange(e.target.value)}
						/>
					</div>

					<div className={styles.formFieldsArrayWrap}>
						<ul className={styles.formFieldsArray}>
							{order.map((field, fieldIndex) => {
								const formFields = Object.keys(field).filter((item) => item !== 'id');

								return (
										<li key={field.id} className={styles.formFields}>
											{formFields.map(formField => (
													<div key={formField + fieldIndex}>
														<Button
																icon="Cross"
																theme="ghost"
																type="button"
																className={styles.removeButton}
																onClick={() => field.id && removeFromOrder(field.id)}
														/>

														<label htmlFor={String(id) + fieldIndex}>
															{formLabelsMapping[formField as FormKeys]}
														</label>

														<input
																id={String(id) + fieldIndex}
																className={styles.formFieldInput}
																value={field[formField as keyof BasketItem]}
																onChange={changeOrderHandler(field, formField)}
														/>
													</div>
											))}
										</li>
								)
							})}
						</ul>

						<Button
								icon="Plus"
								theme="ghost"
								type="button"
								onClick={() => addToOrder({ ...EMPTY_ORDER, id: order.length })}
						>
							Добавить новый продукт в заказ
						</Button>
					</div>

					<div className={styles.modalButtons}>
						<Button type="button" onClick={closeModal}>Отмена</Button>
						<Button type="submit" theme="primary">
							Закончить покупки
						</Button>
					</div>
				</form>
			</Modal>
	)
}
