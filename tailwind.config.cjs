/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
			    green: {
					950: '#20a220',
					960: '#0b6e4f',
				},
				slate: {
					text: '#efefef',
					800: '#000054'
				}
		    },
	    },
	},
	plugins: [],
}
