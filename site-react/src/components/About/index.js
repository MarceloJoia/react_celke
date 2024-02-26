import { useState } from 'react';
import Link from 'next/link';
import styles from '@/components/Menu/Menu.module.css';
import { FaBars } from 'react-icons/fa';

const Menu = () => {
    // Dispositivo movel
    const [isActive, setIsActive] = useState(false);

    // Se estiver false fica True se True fica False
    const activeMenu = () => {
        setIsActive(!isActive);
        console.log(isActive);
    }

    return (
        <nav className={styles.navbar}>
            <div className={styles.maxWidth}>
                <div className={styles.logo}>
                    <Link href="/">Celke</Link>
                </div>
                <ul className={`${styles.menu} ${isActive ? styles.active : ""}`} id={styles.menuSite}>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="about">Sobre Empresa</Link></li>
                    <li><Link href="contact">Contato</Link></li>
                </ul>
                <div className={styles.menuBtn} id={styles.menuBtn}>
                    <i id={styles.menuIcon} onClick={activeMenu}><FaBars /></i>
                </div>
            </div>
        </nav>
    );
}

export default Menu;