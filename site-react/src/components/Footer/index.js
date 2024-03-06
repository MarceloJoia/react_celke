import styles from '@/components/Footer/Footer.module.css';
import Link from "next/link";

function Footer() {
    return (
        <footer className={styles.footer}>
            <span>Created By <Link href="https://celke.com.br" target='_blank'>Celke</Link></span>
        </footer>
    );
}

export default Footer;