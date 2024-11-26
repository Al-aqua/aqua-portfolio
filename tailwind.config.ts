import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		colors: {
			text: '#f1f2f3',
			background: '#000a0c',
			primary: '#06C0DD',
			secondary: '#dcece7',
			accent: '#6ea8b3'
		},

		extend: {
			fontFamily: {
				yatra: ['"Yatra One"', 'cursive'],
				lora: ['Lora', 'serif']
			}
		}
	},

	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				myTheme: {
					primary: '#06C0DD',
					secondary: '#dcece7',
					accent: '#6ea8b3',
					neutral: '#00404d',
					'base-100': '#000a0c'
				}
			}
		]
	}
} satisfies Config;
