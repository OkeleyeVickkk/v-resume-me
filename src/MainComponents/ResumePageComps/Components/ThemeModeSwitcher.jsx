import { Icon } from "@iconify/react";
import React from "react";
import useThemeMode from "../../../assets/hooks/useThemeMode";
const ThemeModeSwitcher = () => {
	const [colorTheme, setTheme] = useThemeMode();

	const toggleDarkMode = () => {
		setTheme(colorTheme);
	};

	return (
		<div className="fixed lg:left-[43%] left-[65%] md:left-[85%] z-[10] top-2 lg:top-5 xl:top-3">
			<div className="flex items-center justify-center flex-col">
				<button
					type="button"
					onClick={() => toggleDarkMode()}
					className={`dark:bg-dark_theme dark:border-main border bg-main p-3 rounded-full text-white rotate-180`}>
					<Icon icon={`mdi:theme-light-dark`} className="w-6 h-6" />
				</button>
			</div>
		</div>
	);
};

export default ThemeModeSwitcher;
