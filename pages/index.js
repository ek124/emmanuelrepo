import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>emmanuelrepo</title>
        <meta name="description" content="github tutorial " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Welcome to Ekanem Emmanuel's page</h1>
    </div>
  )
}
