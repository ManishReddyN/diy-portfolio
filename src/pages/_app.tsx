import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ProSidebarProvider } from "react-pro-sidebar";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { IconContext } from "react-icons";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel-="stylesheet" href="../styles/bootstrap.min.css" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          href="/icons/apple-icon.png"
          type="image/png"
          sizes="any"
        />
        <link
          rel="icon"
          href="/icons/icon192.png"
          type="image/png"
          sizes="192x192"
        />
        <link
          rel="icon"
          href="/icons/icon512.png"
          type="image/png"
          sizes="512x512"
        />
      </Head>
      <ProSidebarProvider>
        <Component {...pageProps} />
        <SpeedInsights />
        <Analytics />
        <IconContext.Provider
          value={{ style: { verticalAlign: "middle" } }}
        ></IconContext.Provider>
      </ProSidebarProvider>
    </>
  );
}
