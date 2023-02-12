import Head from "next/head";
import Image from "next/image";
import MainContainer from "@/components/MainContainer";
import Footer from "@/components/Footer";
import style from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>IRIS Cat Facts</title>
        <meta
          name="Description"
          content="Have fun playing with the cheshire cat and get Cat Facts By Chetan Jogia"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className={`${style.main} `}>
        <div className={style.moon}></div>
        <div className={style.stars}></div>
        <MainContainer />
        <Footer />
      </main>
    </>
  );
}
