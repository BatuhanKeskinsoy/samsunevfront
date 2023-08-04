/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'system': 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      'poppins': ['Poppins', 'sans-serif', 'system-ui'],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        site: `${process.env.NEXT_PUBLIC_SITE_COLOR_RGB}`,
      },
      colors: {
        site: `${process.env.NEXT_PUBLIC_SITE_COLOR_RGB}`,
      },
      animation: {
        scaleMobile: 'scaleMobile 1.2s ease-in-out infinite',
        scaleDesktop: 'scaleDesktop 1.5s ease-in-out infinite',
        loginComing: 'loginComing .2s ease-in-out alternate',
        loginComingMobile: 'loginComingMobile .2s ease-in-out alternate',
      },
      keyframes: {
        scaleMobile: {
          '0%, 100%': { transform: 'scale(1.0)', opacity: '0' },
          '50%': { transform: 'scale(1.2)', opacity: '1' },
        },
        scaleDesktop: {
          '0%, 100%': { transform: 'scale(1.3)', opacity: '0' },
          '50%': { transform: 'scale(1.5)', opacity: '1' },
        },
        loginComing: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '50%': { transform: 'scale(1.1)', opacity: '1' },
          '100%': { transform: 'scale(1.0)', opacity: '1' },
        },
        loginComingMobile: {
          '0%': { transform: 'scale(0.7)', opacity: '0' },
          '100%': { transform: 'scale(1.0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
