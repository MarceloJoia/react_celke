import Head from "next/head";
import Menu from "@/components/Menu";
import AboutContent from "@/components/AboutContent";
import Footer from "@/components/Footer";

function About() {
  return (
    <>
      <Head>
        <title>Sobre Marcelo Joia</title>
        <meta name="description" content="Site ... Sobre..." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Menu />
        <AboutContent />
        <Footer />
      </main>
    </>
  );
}

export default About;
