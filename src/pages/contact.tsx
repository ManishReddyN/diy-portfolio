import Base from "@/components/base";
import Contact from "@/components/contact/contact";
import Head from "next/head";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Bio - Manish Reddy Nandineni</title>
        <meta
          name="description"
          content="Know more about Manish Reddy Nandineni"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Base>
        <Contact />
      </Base>
    </>
  );
}
