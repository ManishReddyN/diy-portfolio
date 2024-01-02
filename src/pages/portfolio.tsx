import Base from "@/components/base";
import Portfolio from "@/components/portfolio/portfolio";
import Head from "next/head";
import data from "@/config/data.json";

export default function PortfolioPage() {
  return (
    <>
      <Head>
        <title>Portfolio - {data.profile.name}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Base>
        <Portfolio />
      </Base>
    </>
  );
}
