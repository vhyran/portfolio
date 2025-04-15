/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				jetbrains: ['JetBrains Mono', 'monospace'],
			},
			colors: {
        void: '#0a0a0a',
        sapphire: '#1e40af',
        pearl: '#e2e8f0',
        amber: '#f59e0b',
      }
		},
	}
};

export default config;
