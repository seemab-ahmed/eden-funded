/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customWhite: "#FDFEFE",
        customGray: "#CFD6D3",
        customGreen: "#0EF3A5",
        customDark: '#131414',
        customDarkGreen: "#0B5B40",
        customLightGreen: "#F7FEFB",
        customTransparentWhite: "rgba(255, 255, 255, 0.05)",
        primaryLight: "rgba(11, 172, 117, 0.05)",
        darkGray: "rgba(49, 60, 56, 0.40)",
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
      },
    },
    boxShadow: {
      custom: "0px 28px 44px 0px rgba(14, 243, 165, 0.30)",
      greenInset: "0px 1px 8px 0px rgba(52, 232, 170, 0.30) inset"
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".btn": {
          display: "flex",
          padding: "0 35px",
          justifyContent: "center",
          alignItems: "center",
          height: "59px",
          fontSize: "16px",
          fontWeight: "400",
          lineHeight: "120%",
          borderRadius: "47px",
          backdropFilter: "blur(14px)",
          transition: "background-color 0.3s ease, color 0.3s ease",

          "&:hover": {
            backgroundColor: "#FDFEFE",
            color: "#0B5B40",
          },
        },
        ".heading-2": {
          color: "#FDFEFE",
          fontSize: "60px",
          fontWeight: 500,
          lineHeight: "120%",
          "@media (max-width: 1280px)": {
            fontSize: "50px",
          },
          "@media (max-width: 1024px)": {
            fontSize: "40px",
          },
        },
        ".para-1": {
          color: "#FDFEFE",
          fontSize: "20px",
          fontWeight: 400,
          lineHeight: "140%",
          "@media (max-width: 1280px)": {
            fontSize: "18px",
          },
          "@media (max-width: 1024px)": {
            fontSize: "16px",
          },
        },
      });
    },
  ],
}

