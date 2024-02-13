import { useUnit } from 'effector-react';

import { UserOrderCard } from '../user-order-card';
import { model } from './model';
import styles from './styles.module.scss';


export const UserOrderList = () => {
	const [order, deleteOrder] = useUnit([model.$order, model.deleteOrder]);

	return (
			<div className={styles.productList}>
				{order.map((elem, index) => (
					<UserOrderCard index={index} key={elem.userName} order={elem} onDelete={deleteOrder} />
				))}
			</div>
	)
}
