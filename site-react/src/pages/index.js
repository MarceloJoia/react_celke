import Head from "next/head";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <>
      <Head>
        <title>Marcelo Joia</title>
        <meta name="description" content="Site ... Sobre..." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>

        <Menu />
        <h1>Marcelo Joia</h1>

      </main>
    </>
  );
}