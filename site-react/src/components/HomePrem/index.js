import styles from '@/components/HomePrem/HomePrem.module.css';
import Link from 'next/link';

const HomePrem = () => {
    return (
        <section className={`${styles.content} ${styles.premium}`}>
            <div className={styles.maxWidth}>
                <h2 className={styles.title}>Serviço Premium</h2>
                <div className={styles.premiumContent}>
                    <div className={`${styles.column} ${styles.left}`}>
                        <img src="/images/HomePrem/premium_v5.jpg" alt="Serviço premium" />
                    </div>
                    <div className={`${styles.column} ${styles.right}`}>
                        <div className={styles.text}>
                            Desenvolvido para você atingir seus melhores índices de produtividade, criatividade e bem-estar.
                        </div>
                        <p>
                            Ut tempus dui in fringilla consequat. Donec accumsan feugiat venenatis. Vestibulum blandit lectus nec lacus tincidunt tempus. Praesent porta erat non ligula egestas, eget imperdiet justo egestas. Pellentesque cursus risus nec leo tincidunt fringilla.
                            Suspendisse faucibus aliquam vestibulum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris volutpat arcu eu mi volutpat fermentum. Aenean vel dignissim orci. Vestibulum mollis
                            elit vel tellus viverra dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus a mattis sem. Cras aliquam fermentum viverra.
                        </p>
                        <Link href="/contact">Contato</Link>
                    </div>
                </div>
            </div>
        </section>

    );
}
export default HomePrem;