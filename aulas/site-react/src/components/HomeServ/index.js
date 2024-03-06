import styles from '@/components/HomeServ/HomeServ.module.css';
import { BsWifi, BsRocketTakeoff } from 'react-icons/bs';
import { FaRegHandshake } from "react-icons/fa";

const HomeServ = () => {
    return (
        <section className={`${styles.content} ${styles.services}`}>
            <div className={styles.maxWidth}>
                <h2 className={styles.title}>Serviços</h2>
                <div className={styles.servContent}>
                    <div className={styles.card}>
                        <div className={styles.box}>
                            <i><BsWifi /></i>
                            <div className={styles.text}>Wifi veloz</div>
                            <p>Sed et dui in ipsum sollicitudin efficitur quis sed elit volutpat. </p>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.box}>
                            <i><BsRocketTakeoff /></i>
                            <div className={styles.text}>Espaço inspirador</div>
                            <p>Sed et dui in ipsum sollicitudin efficitur quis sed elit volutpat. </p>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.box}>
                            <i><FaRegHandshake /></i>
                            <div className={styles.text}>Reuniões</div>
                            <p>Sed et dui in ipsum sollicitudin efficitur quis sed elit volutpat. </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default HomeServ;