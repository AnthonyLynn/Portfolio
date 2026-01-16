import localFont from "next/font/local";

export const roboto = localFont({
  variable: "--font-roboto",
  src: [
    {
      path: "../../public/fonts/Roboto/roboto-400-regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Roboto/roboto-400-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Roboto/roboto-500.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Roboto/roboto-500.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Roboto/roboto-700.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Roboto/roboto-700.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Roboto/roboto-900.woff",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/Roboto/roboto-900.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  fallback: ["Arial", "Helvetica", "sans-serif"],
});
