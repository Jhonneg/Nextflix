import Head from "next/head";
import { Roboto_Slab } from "next/font/google";
import styles from "@/styles/Home.module.css";

const roboto = Roboto_Slab();

export default function Home() {
  return (
    <>
      <Head>
        <title>Nextflix</title>
        <meta name="description" content="Discover videos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${roboto.className}`}>
        <h1>Nextflix</h1>
      </main>
    </>
  );
}
