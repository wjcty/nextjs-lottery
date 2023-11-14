/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            fontFamily: {
                montserrat: ['var(--font-montserrat)']
            }
        }
    },
    plugins: []
    // 关闭tailwind 的预设样式 如h123456 button
    // corePlugins: {
    //     preflight: false
    // }
}
