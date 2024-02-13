import styles from './styles.module.scss';

import { Form } from "@/shared/types";
import { Button } from "@/shared/ui/atoms";

type UserOrderCardProps = {
  index: number;
  order: Form;
  onDelete: (index: number) => void;
}

export const UserOrderCard = ( { order, index, onDelete }: UserOrderCardProps ) => (
    <div className={styles.userCard}>
      <div className={styles.userInfo}>
        <p className={styles.userName}>
          {order.userName}
        </p>

        <ul className={styles.userOrder}>
          {order.order.map(item => (
              <li key={item.name + item.quantity}>
                {item.name}: {item.quantity}
              </li>
          ))}
        </ul>
      </div>

      <Button icon="Cross" theme="ghost" type="button" onClick={() => onDelete(index)} />
    </div>
);
