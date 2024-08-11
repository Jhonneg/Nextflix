import Head from "next/head";
import { Roboto_Slab } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Banner from "@/components/banner/banner";
import Navbar from "@/components/nav/navbar";

const roboto = Roboto_Slab({ weight: "700" });

export default function Home() {
  return (
    <>
      <Head>
        <title>Nextflix</title>
        <meta name="description" content="Discover videos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/static/play-arrow-white.svg" />
      </Head>

      <main className={`${styles.main} ${roboto.className}`}>
        <Navbar username="jonee4339@hotmail.com" />
        <Banner
          title="Bad Boys 2"
          subTitle="best action movie ever"
          imgUrl="/static/imageedit_1_8968412113.gif"
        />

        {/* <Card /> */}
      </main>
    </>
  );
}
