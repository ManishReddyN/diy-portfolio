import Head from "next/head";
import Base from "@/components/base";
import Home from "@/components/home/home";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Manish Reddy Nandineni</title>
        <meta
          name="description"
          content="Welcome to the home page of Manish Reddy's Website"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Base>
        <Home />
      </Base>
    </>
  );
}
