// /** @type {import('tailwindcss').Config} */
// import defaultTheme from "tailwindcss/defaultTheme";

// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       fontFamily: {
//         cinzel: ["Cinzel", ...defaultTheme.fontFamily.sans],
//         inter: ["Inter", ...defaultTheme.fontFamily.sans],
//       },
//     },
//   },
//   plugins: [require("daisyui")],
// };
/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flyonui/dist/js/*.js", // Include FlyonUI components
  ],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ["Cinzel", ...defaultTheme.fontFamily.sans],
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require("daisyui"), // DaisyUI plugin
    require("flyonui"), // FlyonUI plugin
    require("flyonui/plugin"), // Optional: Include only if using FlyonUI JS components
  ],
};
