import { BasketItem, FormKeys } from "@/shared/types";

export const EMPTY_ORDER: BasketItem & { id: number } = {
	name: '',
	quantity: 0,
	id: 0
};

export const formLabelsMapping: Record<FormKeys, string> = {
	name: 'Продукт',
	quantity: 'Количество'
}
