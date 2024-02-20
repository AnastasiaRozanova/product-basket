import { useMemo, PropsWithChildren, createContext } from "react";
import { Nullable } from "@/shared/types";

const ThemeContext = createContext<Nullable<{ color: string }>>(null);

export const MemoContextValue = ({ children }: PropsWithChildren) => {
	const memoValue = useMemo(() => ({ color: 'memo color value' }), []);

	return (
			<ThemeContext.Provider value={memoValue}>
				{children}
			</ThemeContext.Provider>
	);
}
