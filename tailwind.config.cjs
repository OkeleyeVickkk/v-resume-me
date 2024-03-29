/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",

	theme: {
		extend: {
			backgroundColor: {
				main: "#8390FA",
				hoverBgClr: "#6274F8",
				ash_white: "#FAFAFA",
				border_clr: "#e9e9e9",
				input_clr: "rgb(239,242,249)",
				dark_theme: "#121212",
				dark_theme_text_clr: "#23252A",
			},
			colors: {
				main: "#8390FA",
				hoverBgClr: "#6274F8",
				dark_theme: "#121212",
				dark_theme_text_clr: "#23252A",
				border_clr: "#e9e9e9 ",
				label_clr: "rgb(130,139,162)",
				text_clr: "#1E2532",
				input_clr: "rgb(239,242,249)",
			},
			boxShadow: {
				custom_3: "rgba(0, 0, 0, 0.16) 0px 1px 4px;",
				inputShadow: "0px 0px 2px -1px rgb(131, 144, 250, 0.8)",
			},
			animation: {
				rotate: "rotateY 10s linear infinite",
			},
			keyframes: {
				rotateY: {
					"0%": {
						transform: "rotateY(0deg) ",
					},
					"100%": {
						transform: "rotateY(360deg) ",
					},
				},
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
