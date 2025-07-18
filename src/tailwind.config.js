// JavaScript source code
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    safelist: [
        'bg-blue-600',
        'bg-green-600',
        'bg-purple-600',
        'bg-red-500',
        'bg-yellow-500',
        'bg-orange-600',
    ]
}