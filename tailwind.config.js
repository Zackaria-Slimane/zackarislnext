/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';
module.exports = {
	darkMode: 'class',
	content: [
		'./src/pages/**/*.{js,jsx}',
		'./src/components/**/*.{js,jsx}',
		'./src/app/**/*.{js,jsx}',
	],
	future: {
		hoverOnlyWhenSupported: true,
	},
	theme: {
		extend: {
			animation: {
				'bounce-slow': 'bounce 3s linear infinite',
			},
			backdropBlur: {
				zs: '5.5px',
			},
			fontFamily: {
				jetBrain: ['JetBrains Mono', 'monospace', 'cursive'],
				heebo: ['Heebo', 'sans-serif'],
			},
			colors: {
				sunflower: '#33FFBD',
				pastel: '#5cffe4',
				lavender: '#E6E6FA',
				skyblue: '#5998C5',
				peach: '#FFDAB9',
				cream: '#F1F6F9',
				navy: '#102C57',
				powder: '#FAFFFD',
				coral: '#FA824C',
				slate: '#28282B',
			},
		},
	},
	plugins: [typography],
};
