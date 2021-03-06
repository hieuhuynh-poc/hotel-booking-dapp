import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { AccountSelector } from "../components/AccountSelector";

const Home: NextPage = () => {
  return (
      <div className="container">
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app"/>
          <link rel="icon" href="/public/favicon.ico"/>
        </Head>

        <main className="main">
          <AccountSelector/>
        </main>

        <footer className="footer">
          <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
          >
            Powered by{ ' ' }
            <span className="logo">
            <Image src="/vercel.svg" alt="Vercel Logo" width={ 72 } height={ 16 }/>
          </span>
          </a>
        </footer>
      </div>
  )
}

export default Home
