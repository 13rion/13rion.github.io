/** @type {import('tailwindcss').Config} */
// const defaultTheme = require('tailwindcss/defaultTheme');
// import { defaultTheme } from 'tailwindcss/defaultTheme';

export default {
	content: [
		"./index.html",
		"./src/**/*.{html,js,ts,jsx,tsx}"
	],
	theme: {
		fontFamily: {
			libre: ['Libre Baskerville']
		},
		extend: {
		},
	},
	plugins: [],
};
