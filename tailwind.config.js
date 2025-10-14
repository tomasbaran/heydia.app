/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",     // Next.js app directory
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",    // (if using /pages too)
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // your components folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}