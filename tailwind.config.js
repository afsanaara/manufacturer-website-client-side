module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#99dd5d",
        
"secondary": "#a155e0",
        
"accent": "#93d4f9",
        
"neutral": "#37253C",
        
"base-100": "#FBF9FB",
        
"info": "#2C9CE2",
        
"success": "#0B5B53",
        
"warning": "#94610A",
        
"error": "#EF4B48",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
