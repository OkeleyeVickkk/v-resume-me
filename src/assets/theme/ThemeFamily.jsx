import { Icon } from "@iconify/react";
import React, { useContext, useState } from "react";
import { BlockPicker } from "react-color";
import { themeContext } from "../../MainComponents/ResumePageComps/CreateResumePage";
import "../css/fonts.css";
import "../../MainComponents/ResumePageComps/Components/date.css";
import { memo } from "react";

const fontFamily = {
	Roboto: "Roboto",
	Stolzl: "Stolzl",
	IBMPlexSans: "IBMPlexSans",
	Söhne: "Söhne",
	"Fira Code": "Fira Code",
	Syne: "Syne",
	Inter: "Inter",
	Montserrat: "Montserrat",
	Mulish: "Mulish",
	"Nunito Sans": "Nunito Sans",
	Rubik: "Rubik",
	Ubuntu: "Ubuntu",
	Epilogue: "Epilogue",
	"Sharp Grotesk": "Sharp Grotesk",
	Raleway: "Raleway",
	"Work Sans": "Work Sans",
	Grotesk: "Grotesk",
	Sora: "Sora",
	Magnat: "Magnat",
	Exo: "Exo",
	"Expletus Sans": "Expletus Sans",
	Roobert: "Roobert",
	CASaygon: "CASaygon",
	Cormonrant: "Cormonrant",
	Bianco: "Bianco",
	Quicksand: "Quicksand",
};

const ThemeFamily = () => {
	// contexts
	const { themeSelection, setSelectedThemes, setSideBarState, sideBarState, largePreview } = useContext(themeContext);
	const { userResumeColor, themeSideBar, font } = themeSelection;
	// states
	const [colorThemeState, setColorThemeState] = useState(userResumeColor.selectedColor.color);
	const [isActiveColorDropdown, setisActiveColorDropdown] = useState(userResumeColor.colorSelectionMenu.isToggleThemeActive);
	const [isActiveFontDropdown, setisActiveFontDropdown] = useState(false);
	const [selectedFont, setSelectedFont] = useState(font.family.customFont);

	// functions
	function handleColorThemeChange(event) {
		// function that handles the color set by the user
		setColorThemeState(event.hex);
		setSelectedThemes((previousTheme) => ({
			...previousTheme,
			userResumeColor: {
				...previousTheme.userResumeColor,
				selectedColor: {
					...previousTheme.userResumeColor.selectedColor,
					color: event.hex,
				},
			},
		}));
	}

	function handleColorDropdownState() {
		// function that handles if the dropdown color state is active or not
		setisActiveColorDropdown((prevState) => !prevState);
	}

	function useSelectedFont(font) {
		setSelectedFont(font);
		setSelectedThemes((previousData) => {
			return {
				...previousData,
				font: {
					...previousData.font,
					family: {
						...previousData.font.family,
						customFont: font,
					},
				},
			};
		});
		setisActiveFontDropdown(false);
	}

	function closeSideBar() {
		// close the sidebar and update the object state
		setSelectedThemes((previousData) => {
			return {
				...previousData,
				themeSideBar: {
					...previousData.themeSideBar,
					isThemeSideBarOpen: false,
				},
			};
		});
		setSideBarState(false);
	}

	function openDropdown() {
		setisActiveFontDropdown((previousData) => !previousData);
	}

	return (
		<div
			className={`${
				sideBarState === true ? "w-full lg:w-1/2 overflow-auto" : "w-0 opacity-5 overflow-hidden"
			} fixed z-50 backdrop-blur-[2px] h-screen top-0 left-0 origin-left bg-black bg-opacity-25 duration-100 ease-linear`}>
			<div
				className={`p-4 h-full rounded-tr-[1rem] rounded-br-[1rem] bg-white shadow-md flex flex-col gap-y-4 relative ease-linear duration-100 ${
					sideBarState ? "w-4/5 md:w-3/5" : "overflow-hidden opacity-50 w-0"
				}`}>
				<div className="close absolute -right-12">
					<button type="button" className={`bg-gray-50 z-50 shadow-md rounded-full p-2`} onClick={closeSideBar}>
						<Icon icon="mi:close" className="w-5 h-5" />
					</button>
				</div>
				<div title="theme-title">
					<h1 className="text-slate-900 font-medium text-xl">Theme Options</h1>
				</div>
				<div className="flex flex-col gap-y-2">
					<h6 className="font-medium">Font</h6>
					<div className="border border-solid border-border_clr rounded-md relative">
						<button
							type="button"
							className="flex items-center justify-between py-3 px-4 hover:bg-ash_white w-full"
							onClick={openDropdown}>
							<span className="text-[.9rem]" name="font" style={{ fontFamily: `${selectedFont ?? "Roboto"}` }}>
								{selectedFont ?? "Select font"}
							</span>
							<Icon
								icon="fluent:chevron-down-24-filled"
								className={`w-5 h-5 duration-150 ease-linear transition-transform ${
									isActiveFontDropdown ? "rotate-180" : "rotate-0"
								}`}
							/>
						</button>
						<div
							className={`${
								isActiveFontDropdown === true ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
							} origin-top font-dropdown-container rounded-md absolute top-full shadow-md mt-2 left-0 right-0 border-solid bg-white z-50 grid overflow-hidden items-start duration-100`}>
							<div
								className={`min-h-0 max-h-[200px] px-2 overflow-x-hidden overflow-y-auto scroll ${
									isActiveFontDropdown ? "py-2 border" : "py-0 border-0"
								}`}>
								{Object.keys(fontFamily).map((font, fontIndex) => (
									<button
										type="button"
										className="p-2 w-full rounded-[4px] text-start outline-transparent focus-visible:outline-main text-sm bg-transparent hover:bg-main hover:bg-opacity-20 hover:text-main "
										key={fontIndex}
										style={{ fontFamily: `${font}` }}
										onClick={() => useSelectedFont(font)}>
										{font}
									</button>
								))}
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-y-2 relative">
					<div className="flex items-center gap-x-4">
						<h6 className="font-medium">Color:</h6>
						<button
							type="button"
							className={`rounded-full active:border-main p-2 shadow-custom_3 border border-solid border-main ${
								isActiveColorDropdown ? "bg-main hover:bg-hoverBgClr" : "bg-white"
							}`}
							onClick={handleColorDropdownState}>
							<Icon icon="fluent-emoji:artist-medium-light" className="w-8 h-8" />
						</button>
					</div>
					<div
						className={`border transition duration-200 border-solid border-border_clr p-2 text-[.8rem] rounded-md absolute top-full translate-y-3 origin-top w-max shadow-md ${
							isActiveColorDropdown ? "scale-100" : " scale-0"
						}`}>
						<BlockPicker color={colorThemeState} onChange={handleColorThemeChange} />
					</div>
				</div>
				<div className="mt-4 p-4 border border-solid border-border_clr rounded-md">
					<span className="text-slate-400">More theme options coming soon...</span>
				</div>
			</div>
		</div>
	);
};

export default memo(ThemeFamily);
