/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,svelte,ts}"
  ],
  theme: {
    extend: {
      fontFamily: {
        "jost": ["Jost", "sans-serif"]
      },
      padding: {
        "sm": "3rem",
        "md": "4rem",
        "lg": "5rem"
      },
      gap: {
        "sm": "3rem",
        "md": "4rem",
        "lg": "5rem"
      },
      colors: {
        "normal": "#242424",
        "light": "#333333",
      },
      borderWidth: {
        "sm": "1.5px"
      }
    },
  },
  plugins: [
    require("daisyui")
  ],
  daisyui: {
    base: false,
    themes: ["light"]
  }
}

