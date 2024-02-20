import { useId, useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";

import styles from './styles.module.scss';

import { Button } from "@/shared/ui/atoms";
import { Modal, modalsModel } from "@/shared/lib/modals";
import { Form, FormKeys } from '@/shared/types';
import { EMPTY_ORDER, formLabelsMapping } from '@/shared/lib/constants';

export const AddProductsWithReactHookForm = () => {
	const { register, control, handleSubmit } = useForm<Form>({
		defaultValues: {
			userName: '',
			order: [EMPTY_ORDER]
		}
	});

	// @ts-ignore
	const { fields, append, remove } = useFieldArray({
		control,
		name: "order"
	});

	const id = useId();

	useEffect(() => {
		const items = localStorage.getItem('formValues');
		const getFromStorage = () => console.log('form values ',  items && JSON.parse(items));

		window.addEventListener('storage', getFromStorage);
		return () => window.removeEventListener('storage', getFromStorage)
	}, [])

	const onSubmit = (data: any) => {
		localStorage.setItem('formValues', JSON.stringify(data))
	}

	return (
			<Modal className={styles.modalWrap}>
				<h3 className={styles.modalTitle}>Мои покупки c react-hook-form</h3>

				<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
					<div className={styles.formField}>
						<label htmlFor={id}>Имя покупателя</label>
						<input id={id} className={styles.formFieldInput} {...register('userName')} />
					</div>

					<div className={styles.formFieldsArrayWrap}>
						<ul className={styles.formFieldsArray}>
							{fields.map((field, fieldIndex) => {
								const formFields = Object.keys(field).filter(elem => elem !== 'id');

								return (
										<li key={field.id} className={styles.formFields}>
											{formFields.map(elem => (
													<div key={elem + fieldIndex}>
														<label htmlFor={String(id) + fieldIndex}>
															{formLabelsMapping[elem as FormKeys]}
														</label>

														<input
																id={String(id) + fieldIndex}
																className={styles.formFieldInput}
																{...register(`order.${fieldIndex}.${elem as FormKeys}`)}
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
								onClick={() => append(EMPTY_ORDER)}
						>
							Добавить новый продукт в заказ
						</Button>
					</div>

					<div className={styles.modalButtons}>
						<Button type="button" onClick={() => modalsModel.closeActive()}>Отмена</Button>
						<Button type="submit" theme="primary">
							Закончить покупки
						</Button>
					</div>
				</form>
			</Modal>
	)
}
