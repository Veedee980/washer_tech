/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { AppProps } from "next/app";
// @ts-ignore: side-effect import for CSS without type declarations
import "@/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="font-poppins">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

