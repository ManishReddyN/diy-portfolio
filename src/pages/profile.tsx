import Base from "@/components/base";
import Profile from "@/components/profile/profile";
import Head from "next/head";
import data from "@/config/data.json";

export default function ProfilePage() {
  return (
    <>
      <Head>
        <title>Profile - {data.profile.name}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Base>
        <Profile />
      </Base>
    </>
  );
}
