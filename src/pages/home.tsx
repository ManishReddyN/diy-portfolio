import Head from "next/head";
import Base from "@/components/base";
import Home from "@/components/home/home";
import data from "@/config/data.json";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>{data.profile.name}</title>
        <meta
          name="description"
          content={
            "Welcome to the home page of " +
            data.profile.name +
            "'s Personal Website"
          }
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Base>
        <Home />
      </Base>
    </>
  );
}
