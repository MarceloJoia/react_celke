import styles from '@/components/ContactContent/contactContent.module.css';
import { FaUser, FaLocationDot, FaEnvelope } from "react-icons/fa6";

const ContactContent = () => {
    return (
        <>
            <div className={`${styles.column} ${styles.left}`}>
                <p>Mauris volutpat arcu eu mi volutpat fermentum. Aenean vel dignissim orci. Vestibulum mollis elit vel tellus viverra dictum.</p>
                <div className={styles.icons}>
                    <div className={styles.row}>
                        <i><FaUser /></i>
                        <div className={styles.info}>
                            <div className={styles.head}>
                                Empresa
                            </div>
                            <div className={styles.subTitle}>
                                Celke
                            </div>
                        </div>
                    </div>

                    <div className={styles.row}>
                        <i><FaLocationDot /></i>
                        <div className={styles.info}>
                            <div className={styles.head}>
                                Enderço
                            </div>
                            <div className={styles.subTitle}>
                                Avenida Winston Churchill
                            </div>
                        </div>
                    </div>

                    <div className={styles.row}>
                        <i><FaEnvelope /></i>
                        <div className={styles.info}>
                            <div className={styles.head}>
                                E-mail
                            </div>
                            <div className={styles.subTitle}>
                                cesar@celke.com.br
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        </>
    );
}
export default ContactContent;
