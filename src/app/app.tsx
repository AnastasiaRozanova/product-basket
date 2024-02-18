import { OrderPage } from '@/widgets/order-page';
import { Modals } from '@/shared/lib/modals';
import './init';

export const App = () => (
		<>
			<OrderPage />
			<Modals />
			<div id="dropdown-root"></div>
			<div id="tooltip-root"></div>
			<div id="modal-root"></div>
		</>
)
