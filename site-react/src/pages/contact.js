import Head from "next/head";
import styles from '@/styles/Contact.module.css';
import Menu from "@/components/Menu";
import ContactContent from "@/components/ContactContent";

function Contact() {
  return (
    <>
      <Head>
        <title>Contato Joia Marketing</title>
        <meta name="description" content="Site ... Sobre..." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Menu />

        <section className={`${styles.content} ${styles.contact}`}>
          <div className={styles.maxWidth}>
            <h2 className={styles.title}>Contato</h2>
            <div className={styles.contactContent}>
              <ContactContent />
            </div>
          </div>
        </section>

      </main >
    </>
  );
}
export default Contact;
