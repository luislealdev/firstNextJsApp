import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>
            Go to <Link href="/about"> about </Link>
          </h1>
      </main>
    </>
  );
}
