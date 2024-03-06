import styles from '@/components/AboutContent/AboutContent.module.css';

const AboutContent = () => {
    return (
        <section className={`${styles.content} ${styles.about}`}>
            <div className={styles.maxWidth}>
                <h2 className={styles.title}>Sobre Empresa</h2>

                <div className={styles.aboutContent}>
                    <div className={`${styles.column} ${styles.left}`}>
                        <img src="/images/aboutContent/premium_v1.jpg" alt="Sobre Empresa" />
                    </div>
                    <div className={`${styles.column} ${styles.right}`}>
                        <div className={styles.text}>
                            Desenvolvido para você atingir seus melhores índices de produtividade, criatividade e bem-estar 1.
                        </div>
                        <p>Mauris semper lobortis dolor sed ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec erat odio, rutrum efficitur lobortis vel, rhoncus eget nunc. Vivamus molestie turpis non interdum dignissim. Ut venenatis
                            lectus malesuada, ultricies tortor et, fermentum massa. Mauris id felis faucibus, ullamcorper erat eget, gravida est.</p>
                    </div>
                </div>

                <div className={styles.aboutContent}>
                    <div className={`${styles.column} ${styles.left}`}>
                        <img src="/images/aboutContent/premium_v2.jpg" alt="Sobre Empresa" />
                    </div>
                    <div className={`${styles.column} ${styles.right}`}>
                        <div className={styles.text}>
                            Desenvolvido para você atingir seus melhores índices de produtividade, criatividade e bem-estar 2.
                        </div>
                        <p>Mauris semper lobortis dolor sed ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec erat odio, rutrum efficitur lobortis vel, rhoncus eget nunc. Vivamus molestie turpis non interdum dignissim. Ut venenatis
                            lectus malesuada, ultricies tortor et, fermentum massa. Mauris id felis faucibus, ullamcorper erat eget, gravida est.</p>
                    </div>
                </div>

                <div className={styles.aboutContent}>
                    <div className={`${styles.column} ${styles.left}`}>
                        <img src="/images/aboutContent/premium_v3.jpg" alt="Sobre Empresa" />
                    </div>
                    <div className={`${styles.column} ${styles.right}`}>
                        <div className={styles.text}>
                            Desenvolvido para você atingir seus melhores índices de produtividade, criatividade e bem-estar 3.
                        </div>
                        <p>Mauris semper lobortis dolor sed ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec erat odio, rutrum efficitur lobortis vel, rhoncus eget nunc. Vivamus molestie turpis non interdum dignissim. Ut venenatis
                            lectus malesuada, ultricies tortor et, fermentum massa. Mauris id felis faucibus, ullamcorper erat eget, gravida est.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default AboutContent;