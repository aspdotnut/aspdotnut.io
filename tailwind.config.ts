import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                'normalText': '#ededed',
                'specialText': '#000000',
                'specialTextHover': '#a2a2a2',
                'special': '#f8e9bd',
                'background': '#1d1d1e',
                'darkenedBlur': 'rgba(0, 0, 0, 0.2)'
            },
        },
    },
    plugins: [],
};
export default config;
