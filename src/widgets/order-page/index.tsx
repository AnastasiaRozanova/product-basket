import styles from './styles.module.scss';

import { UserOrderList } from '@/entities/user-order-list';
import { AddOrder } from '@/features/add-order';
import { UseEffectFlow } from '@/entities/use-effect-flow';

export const OrderPage = () => (
		<div className={styles.pageWrap}>
			<UseEffectFlow />

			<div className={styles.buttons}>
				<AddOrder textContent="Начать заказ" modalName="AddProducts" />
				<AddOrder textContent="Начать заказ с react-hook-form" modalName="AddProductsWithReactHookForm" />
			</div>

			<UserOrderList />
		</div>
)
