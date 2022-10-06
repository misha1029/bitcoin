/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./app/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		fontSize: {
			xs: '1rem',
			sm: '1.1rem',
			tiny: '1.21rem',
			base: '1.27rem',
			lg: '1.46rem',
			xl: '1.64rem',
			'2xl': '1.825rem',
			'3xl': '2.2rem',
			'4xl': '2.7rem',
			'5xl': '3.25rem',
			'6xl': '4.3rem',
			'7xl': '5.8rem',
		},
		extend: {
			colors: {
				primary: '#5f3DF7',
			},
			transitionTimingFunction: {
				DEFAULT: 'ease-in-out',
			},
			transitionDuration: {
				DEFAULT: '350ms',
			},
      zIndex: {
        1: '1',
        2: '2',
        3: '3',
      },
		},
	},
	plugins: [
		plugin(({ addUtilities, addComponents }) => {
			addComponents({
        '.text-shadow': {
          textShadow: '1px 1px rgba(0, 0, 0, 0.4)'
        },
				'.shadow-icon': {
					display: 'flex',
					padding: '0.4rem',
					alignItems: 'center',
					justifyContent: 'center',
					fontSize: '2rem',
					transition: 'box-shadow .4s ease-in-out',
					boxShadow: '0 4px 10px rgba(45, 8, 125, 0.2)',
					color: '#353538',
					borderRadius: '50%',
					backgroundColor: '#fff',
					'&:hover': {
						boxShadow: '0 4px 16px rgba(45, 8, 125, 0.3)',
					},
				},
			}),
				addUtilities({

					'.flex-center-between': {
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
					},
					'.flex-center-center': {
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					},
          '.image-like-bg': {
            objectPosition: 'center',
            objectFit: 'cover',
            pointerEvents: 'none',
          },
				})
		}),
	],
}
