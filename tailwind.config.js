/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
    container:{
      center:true,
      padding:{
        DEFAULT : "1rem",
        "sm":"2rem",
        "md":"3rem",
        "lg":"4rem",
        "xl":"5rem",
      }
    },
    fontFamily:{
      "danaBold":"dana-bold",
      "dana":"dana",
      "danaBlack" : "dana-black",
      "Harmattan" : "Harmattan"
    },
		extend: {
			colors: {
				mainColor: "#e05b1d",
				secColor: "#f49f34",
				mainBg: "#171932",
				secBg: "#34354e",
			},
      screens:{
        "xmd" : "900px"
      }
		},
	},
	plugins: [],
};
