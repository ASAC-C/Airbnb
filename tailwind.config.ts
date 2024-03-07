import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUpToFadeIn: {
          from: { transform: "translateY(100%)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        slideDownToFadeOut: {
          from: { transform: "translateY(0)", opacity: "1" },
          to: { transform: "translateY(100%)", opacity: "0" },
        },
      },
      /**
       * PhotoModal 활성화에 사용되는 애니메이션
       * > slideUpToFadeIn, slideDownToFadeOut
       */
      animation: {
        slideUp: "slideUp 0.4s ease-out",
        fadeIn: "fadeIn 0.4s ease-in-out",
        slideUpToFadeIn: "slideUpToFadeIn 0.4s ease-out",
        slideDownToFadeOut: "slideDownToFadeOut 0.3s ease-in-out",
      },
      colors: {
        customBGGray: "#dddddd",
        customBGHover: "#f7f7f7",
        customTextGray: "#717171",
      },
    },
  },
  plugins: [
    //require("@tailwindcss/line-clamp") // tailwind css v3.3 기본 제공
  ],
};
export default config;
