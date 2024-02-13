import { FC } from 'react';

import { register as modalsRegister, ModalsRegistry } from '@/shared/lib/modals';
import { AddProducts } from '@/features/add-products';
import { AddProductsWithReactHookForm } from '@/features/add-products-with-react-hook-form';

(
		[
			{ name: ModalsRegistry.AddProducts, component: AddProducts },
			{ name: ModalsRegistry.AddProductsWithReactHookForm, component: AddProductsWithReactHookForm },
		] as Array<{
			name: (typeof ModalsRegistry)[keyof typeof ModalsRegistry];
			component: FC<any>;
		}>
).forEach(modalsRegister);
