import type { Config } from "tailwindcss";

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    extend: {
      rotate: {
        '20': '20deg',
        '27': '27deg',
        '210': '210deg',
        '240': '240deg',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        "bci-purple": "#945DBD",
        "bci-white": "#F0EFF0",
        "bci-gray": "#1E1E1E",
        "bci-light-gray": "#9F9F9F",
      },
      boxShadow: {
        'normal': '0 0 20px 5px rgba(240, 239, 240, 0.5)',
        'normal-light': '0 0 20px 0 rgba(240, 239, 240, 0.5)',
      },
      scale: {
        '140': '1.4',
        '200': '2',
      },
      borderWidth: {
        '6': '6px',
      },
      lineHeight: {
        '4-rem': '4rem',
      }
    },
  },
} satisfies Config;

export default config;