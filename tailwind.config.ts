import type { Config } from "tailwindcss";

export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],

	theme: {
		extend: {
			fontFamily: {
				gentium: ["Gentium Plus", "serif"],
				persian: ["Scheherazade New", "serif"],
			},
		},
	},

	plugins: [],
} satisfies Config;
