import Base from "@/components/base";
import Bio from "@/components/bio/bio";
import Head from "next/head";
import data from "@/config/data.json";

export default function BioPage() {
  return (
    <>
      <Head>
        <title>Biography - {data.profile.name}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Base>
        <Bio />
      </Base>
    </>
  );
}
