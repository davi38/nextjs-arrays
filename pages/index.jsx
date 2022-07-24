import Head from 'next/head'
import styles from './styles/Home.module.css'
import Footer from './components/Footer'
import Layout from './components/Layout'
import Image from 'next/image'


export default function Home() {
  return (
    <>
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout />
        <main className={styles.main}>
        <h1 className={styles.title}>
          Bem Vindo ao Tutorial de Arrays!
        </h1>

        <div className={styles.grid}>
          <Image src="/arry2.jpg" alt="array" width="800px" height="600px" />
        </div>
      </main>

      <footer>
       <Footer />
      </footer>
    </div>
    </>
  )
}
