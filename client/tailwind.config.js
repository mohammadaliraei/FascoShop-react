const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    colors: {
      PurpleBtn: "#9333ea",
      PinkBtn: "#be185d",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
});
