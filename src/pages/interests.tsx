import Base from "@/components/base";
import Interests from "@/components/interests/interests";
import Head from "next/head";
import data from "@/config/data.json";

export default function InterestsPage() {
  return (
    <>
      <Head>
        <title>Interests - {data.profile.name}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Base>
        <Interests />
      </Base>
    </>
  );
}
