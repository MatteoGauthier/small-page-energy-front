import { defaultSettings } from "astro/runtime/client/dev-toolbar/settings.js";

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'white': '#FBFAFF',
			'black': '#010102',
			'gray100': '#F2F0FF',
			'gray200': '#DFE6FC',
			'blue100': '#91E0FF',
			'blue200': '#6346F3',
			'blue300': '#583ED7',
			'blue400': '#492ECB',
			'blue500': '#35209D',
			'blue600': '#2D1B83',
			'purple100': '#C8BBF3',
			'purple200': '#9B52EF',
			'purple300': '#8F13A5',
			'pink100': '#F005AE',
		},
		extend: {
			fontFamily: {
				'display': ['CabinetGrotesk-Variable', 'sans-serif'],
			},
		},
		screens: {
			'xs': {'min': '0px', 'max': '390px'},
			// => @media (min-width: 390px) { ... }

			'sm': {'min': '390px', 'max': '640px'},
			// => @media (min-width: 640px) { ... }
	  
			'md': {'min': '640px', 'max': '768px'},
			// => @media (min-width: 768px) { ... }
	  
			'lg': {'min': '768px', 'max': '1024px'},
			// => @media (min-width: 1024px) { ... }
	  
			'xl': '1280px',
			// => @media (min-width: 1280px) { ... }
	  
			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }
		  },
	},
	plugins: [],
};
