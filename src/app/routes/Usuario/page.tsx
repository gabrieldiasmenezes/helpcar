'use client';
import Link from "next/link";
import { useState } from "react";
import styles from '@/estiliacao/Usuario.module.css';

export default function Usuario() {
    const [mostraMenu, setMostraMenu] = useState(false);
    
    const mostrarM = () => {
        setMostraMenu(true);
    };
    const fecharM = () => {
        setMostraMenu(false);
    };

    return (
        <>
            <div className={styles.Usu}>
                <section className={styles.Menu}>
                    <Link className={styles.link} href={'Usuario'}>Pagina do Usuario</Link>
                    <Link className={styles.link} href={'Dados'}>Meus Dados</Link>
                    <Link className={styles.link} href={'Veiculos'}>Meus Veículos</Link>
                    <Link className={styles.link} href={'/'}>LogOut</Link>
                </section>
                <ul onClick={mostrarM} className={styles.btMenu}>
                    <li>_____</li>
                    <li>_____</li>
                    <li>_____</li>
                </ul>
                
                {mostraMenu && (
                    <section className={`${styles.MenuM} ${styles.mostrar}`}>
                        <button className={styles.Fechar} onClick={fecharM}>x</button>
                        <Link className={styles.link} href={'Usuario'}>Pagina do Usuario</Link>
                        <Link className={styles.link} href={'Dados'}>Meus Dados</Link>
                        <Link className={styles.link} href={'Veiculos'}>Meus Veículos</Link>
                        <Link className={styles.link} href={'/'}>LogOut</Link>
                    </section>
                )}

                <section className={styles.box1}>
                    <h1 className={styles.T1}>Bem vindo à sua página!!</h1>
                </section>
            </div>
        </>
    );
}
