import Link from 'next/link';
import styles from '@/components/HomeTop/HomeTop.module.css';

const HomeTop = () => {
    return (
        <section className={`imgTop ${styles.content} ${styles.top}`}>
            <style>
                {
                    `.imgTop{
                        background: linear-gradient(to right, var(--main-color) 25%, rgba(255, 255, 255, 0)), url(/images/homeTop/banner_top_v5.jpg) no-repeat center;
                    }`
                }
            </style>
            <div className={styles.maxWidth}>
                <div className={styles.topContent}>
                    <div className={styles.textOne}>Temos a solução</div>
                    <div className={styles.textTwo}>que a sua empresa precisa</div>
                    <div className={styles.textThree}>Podemos ajudar a sua empresa!</div>
                    <Link href="contato.html">Entre em Contato</Link>
                </div>
            </div>
        </section>
    );
}
export default HomeTop;