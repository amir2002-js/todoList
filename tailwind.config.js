/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
    container:{
      center:true,
      padding:{
        "sm":"1rem",
        "md":"2rem",
        "lg":"3rem",
        "xl":"4rem",
      }
    },
    fontFamily:{
      "danaBold":"dana-bold",
      "dana":"dana",
    },
		extend: {
			colors: {
				mainColor: "#e05b1d",
				secColor: "#f49f34",
				mainBg: "#171932",
				secBg: "#34354e",
			},
		},
	},
	plugins: [],
};
