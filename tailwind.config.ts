import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		colors: {
			text: '#f5f9fa',
			background: '#0A0D0D',
			primary: '#05696B',
			secondary: '#4B515C',
			accent: '#878A9D'
		},
		extend: {}
	},

	plugins: []
} satisfies Config;
