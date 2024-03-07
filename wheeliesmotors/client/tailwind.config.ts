  import type { Config } from "tailwindcss";

  const config: Config = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    // theme: {
    //   extend: {
    //     colors: {
    //       aliceblue: "rgba(230, 243, 255, 0.75)",
    //       gray: {
    //         "100": "#fcfeff",
    //         "200": "#7c838a",
    //         "300": "rgba(0, 0, 0, 0.5)",
    //       },
    //       silver: "#b0bac3",
    //       yellow: "#f9ed32",
    //       black: "#000",
    //     },
    //     spacing: {},
    //     fontFamily: {
    //       roboto: "Roboto",
    //       poppins: "Poppins",
    //     },
    //     borderRadius: {
    //       "6xl": "25px",
    //       mini: "15px",
    //       "3xs": "10px",
    //     },
    //   },
    //   fontSize: {
    //     xl: "20px",
    //     base: "16px",
    //     sm: "14px",
    //     "7xl": "26px",
    //     "2xl": "21px",
    //     lg: "18px",
    //     inherit: "inherit",
    //   },
    //   screens: {
    //     mq825: {
    //       raw: "screen and (max-width: 825px)",
    //     },
    //     mq675: {
    //       raw: "screen and (max-width: 675px)",
    //     },
    //     mq450: {
    //       raw: "screen and (max-width: 450px)",
    //     },
    //   },
    // },
    // corePlugins: {
    //   preflight: false,
    // },
  };

  export default config;
