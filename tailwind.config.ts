/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				jetbrains: ['JetBrains Mono', 'monospace'],
			},
		},
	},
	plugins: [
		require('@catppuccin/tailwindcss')({
			defaultFlavour: 'mocha',
		}),
	],
};

export default config;
