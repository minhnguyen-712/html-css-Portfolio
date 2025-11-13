/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./assets/**/*.{js,css}"
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                'brand-blue': '#005792',
                'brand-dark': '#0D2235',
                'brand-light': '#F6F9FC',
                'brand-accent': '#00A8E8',
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        }
    },
    plugins: [],
}