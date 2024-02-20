import { createContext, PropsWithChildren, useState } from "react";
import { Nullable } from "@/shared/types";

const CountContext = createContext<Nullable<number>>(null);
const ColorContext = createContext<Nullable<string>>(null);

export const ContextDataSeparation = ({ children }: PropsWithChildren) => {
	const [count, setCount] = useState(1);
	const [color, setColor] = useState('');

	return (
			<CountContext.Provider value={count}>
				<ColorContext.Provider value={color}>
					{children}
				</ColorContext.Provider>
			</CountContext.Provider>
	);
}
