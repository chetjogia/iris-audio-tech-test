import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })
import MainContainer from '@/components/MainContainer'
import Footer from '@/components/Footer'
import style from '../styles/Home.module.scss'


export default function Home() {
  return (
    <>
      <Head>
        <title>IRIS Cat Facts</title>
        <meta name="Have fun playing with the cheshire cat and learning about cats" content="By Chetan Jogia" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={style.main}>
        <div className={style.description}>
            <h1>RANDOM CAT FACTS</h1>
        </div>
        <MainContainer/>
        <Footer/> 
      </main>
    </>
  )
}