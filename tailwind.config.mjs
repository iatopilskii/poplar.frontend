/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			textDark: '#373530',
			textRed: '#E14646',
			bgLight: '#F9F9FA',
			tagPurple: 'rgba(105, 64, 165, 0.3)',
			tagGrey: 'rgba(143, 142, 138, 0.5)',
			tagRed: 'rgba(225, 70, 70, 0.3)',
			tagGreen: 'rgba(11, 110, 153, 0.3)',
			tagYellow: 'rgba(223, 172, 3, 0.3)',
			bdLight: '#E1E1E1',
		},
		extend: {
			fontFamily: {
				display: 'Inter, sans-serif'
			},
			container: {
				center: true,
				padding: '2rem',
				screens: {
					sm: '100%',
					md: '100%',
					lg: '100%',
					xl: '1024px',
					'2xl': '1024px',
				}
			}
		},
	},
	plugins: [],
}
