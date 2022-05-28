module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FEB819",

          secondary: "#1e28aa",

          accent: "#c115c4",

          neutral: "#24262E",

          "base-100": "#FAF9FA",

          info: "#62D0EF",

          success: "#259D59",

          warning: "#EECF5D",

          error: "#EB3528",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
