export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#F5F2EC",
        panel: "#FAF7F2",
        primary: "#E97A5F",
        textMain: "#1A1A1A",
        textSoft: "#6B6B6B",
        borderSoft: "#E5E2DC",

        bgDark: "#0F0F0F",
        panelDark: "#1A1A1A",
        textMainDark: "#F5F5F5",
        textSoftDark: "#A1A1A1",
        borderDark: "#2A2A2A",
      },
    },
  },
  plugins: [],
};