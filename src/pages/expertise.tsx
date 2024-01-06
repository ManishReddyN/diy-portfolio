import Base from "@/components/base";
import Interests from "@/components/interests/interests";
import Skills from "@/components/skills/skills";
import Head from "next/head";
import data from "@/config/data.json";

export default function ExpertisePage() {
  return (
    <>
      <Head>
        <title>Expertise - {data.profile.name}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Base>
        <div>
          <Skills />
          <Interests />
        </div>
      </Base>
    </>
  );
}
