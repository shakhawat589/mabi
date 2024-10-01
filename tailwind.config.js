/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "1rem",
        xl: "1rem",
        "2xl": "1rem",
      },
    },
    extend: {
      colors: {
        "blue-gray-100": "#F1F5F9",
        "blue-gray-200": "#E2E8F0",
        "blue-gray-300": "#CBD5E1",
        "blue-gray-400": "#94A3B8",
        "blue-gray-500": "#64748B",
        "blue-gray-600": "#475569",
        "blue-gray-700": "#334155",
        "blue-gray-800": "#1E293B",
        "blue-gray-900": "#0F172A",
      },
    },
  },
  plugins: [
    "prettier-plugin-tailwindcss"
  ],
};
