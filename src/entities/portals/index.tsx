import { useState } from "react";
import { Button } from "@/shared/ui/atoms";
import { Modal, Dropdown } from "@/shared/ui/molecules";
import { mockData } from './lib';

export const Portals = () => {
	const [isModalOpen, setModalOpen] = useState(false);

	return (
			<>
				<Button onClick={() => setModalOpen(true)}>
					Открыть модальное окно
				</Button>

				<Modal isOpen={isModalOpen} setOpen={setModalOpen}>
					<h2>Пример работы с порталами</h2>
					<Dropdown label="Фрукты" tooltip="Очень полезные фрукты" options={mockData} />
				</Modal>
			</>
	)
}
