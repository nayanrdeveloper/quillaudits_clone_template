/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#15306F",
        "light-blue": "#2D83EE",
        "light-black": "#391400",
      },
      backgroundImage: {
        "gradient-blue": "linear-gradient(#7184FD, #3F7AF0,#4F37EE)",
        "gradient-light-blue": "linear-gradient(#212D6B, #1D2B5F,#121D46,#182A5D)",
      },
      boxShadow: {
        'dark-blue': "5px 8px 10px #00000029",
        'filter': "3px 3px 6px #00000029",
      }
    },
  },
  plugins: [],
}
