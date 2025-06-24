/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4f46e5",  // Indigo
        dark: "#1f2937",     // Tailwind gray-800
        light: "#f9fafb",    // Tailwind gray-50
        danger: "#dc2626",   // Red-600
      },
      spacing: {
        "128": "32rem",
        "144": "36rem",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: 0.8 },
          '50%': { opacity: 1 },
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.4s ease-out forwards',
        pulseSlow: 'pulseSlow 2s infinite',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
