module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        fira: ["Fira Sans Condensed"],
        lato: ["Lato"],
        raleway: ["Raleway"],
      },
      minHeight: {
        0: "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75vh",
        90: "90vh",
        80: "80vh",
        full: "100%",
      },
      translate: {
        50: "50%",
        35: "35%",
      },
      inset: {
        50: "50%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
