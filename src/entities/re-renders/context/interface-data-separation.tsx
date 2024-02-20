import { createContext, PropsWithChildren, useState } from "react";
import { Nullable } from "@/shared/types";

const DataContext = createContext<Nullable<string>>(null);
const ApiContext = createContext<Nullable<(value: string) => void>>(null);

export const ContextInterfaceDataSeparation = ({ children }: PropsWithChildren) => {
	const [state, setState] = useState('');

	return (
			<DataContext.Provider value={state}>
				<ApiContext.Provider value={setState}>
					{children}
				</ApiContext.Provider>
			</DataContext.Provider>
	);
}
