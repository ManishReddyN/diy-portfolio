import Base from "@/components/base";
import Profile from "@/components/profile/profile";
import Home from "@/components/home/home";
import { useMediaQuery } from "@/utilities/mediaQuery";
import Head from "next/head";

export default function ProfilePage() {
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
        <Profile />
      </Base>
    </>
  );
}
