import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-roboto)', 'var(--font-poppins)'],
            },
            light: {
                100: '#FFFFFF',
                200: '#FFFAF1',
                300: '#E1E1E6',
                400: '#C4C4CC',
                500: '#A7A7B4',
                600: '#7C7C8A',
                700: '#76797B',
            },
            dark: {
                100: '#000405',
                200: '#00070A',
                300: '#000204',
                400: '#000A0F',
                500: '#000C12',
                600: '#00111A',
                700: '#001119',
                800: '#0D161B',
                900: '#0D1D25',
                1000: '#192227',
            },
            tomato: {
                '100': '#750310',
                '200': '#92000E',
                '300': '#AB222E',
                '400': '#AB4D55',
            },
            carrot: {
                '100': '#FBA94C',
            },
            mint: {
                '100': '#04D361',
            },
            cake: {
                '100': '#065E7C',
                '200': '#82F3FF',
            },
        },
    },
    plugins: [],
}
export default config
