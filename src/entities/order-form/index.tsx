import { ControllerHof } from 'effector-react-form';

import styles from './styles.module.scss';

import { Button, Input } from "@/shared/ui/atoms";
import { BasketItem } from '@/shared/types';

type OrderFormProps = {
	controller: ControllerHof;
	formItemName: string;
	field: BasketItem;
	index: number;
	onDelete: (index: number) => void;
}

export const OrderForm = ( { controller, formItemName, field, index, onDelete }:OrderFormProps ) => (
		<div className={styles.orderWrap}>
			<div className={styles.orderHead}>
				<p className={styles.orderTitle}>Заказ {index + 1}


				</p>

				{index !== 0 && (
					<Button icon="Cross" theme="ghost" type="button" onClick={() => onDelete(index)} />
				)}
			</div>

			<div className={styles.orderFormWrap}>
				<Input
					label="Продукт"
					placeholder="Введите название"
					controller={controller({ name: `${formItemName}.name` })}
				/>

				<Input
					type="number"
					label="Количество"
					placeholder="Введите количество"
					controller={controller({ name: `${formItemName}.quantity` })}
				/>
			</div>
		</div>
)
