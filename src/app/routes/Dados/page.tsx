'use client'
import Link from "next/link";
import styles from "@/estiliacao/Dados.module.css"
import { useState } from "react";


export default function Dados() {
    const [mostraMenu, setMostraMenu] = useState(false);
    
    const mostrarM = () => {
        setMostraMenu(true);
    }

    const fecharM = () => {
        setMostraMenu(false);
    }

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
                        <Link className={styles.link} href={'Usuario'}>Pagina do Usuario</Link>
                        <button className={styles.Fechar} onClick={fecharM}>x</button>
                        <Link className={styles.link} href={'Veiculos'}>Meus Veículos</Link>
                        <Link className={styles.link} href={'/'}>LogOut</Link>    
                    </section>
                )}
                <section className={styles.box1}>
                    <h1 className={styles.T1}>Seus Dados</h1>
                    <ul className={styles.listaDados}>
                        <li className={styles.li}>Nome</li>
                        <li className={styles.li}>Email</li>
                        <li className={styles.li}>CEP</li>
                        <li className={styles.li}>Rua</li>
                        <li className={styles.li}>Numero</li>
                        <li className={styles.li}>Cidade</li>
                        <li className={styles.li}>Estado</li>
                        <li className={styles.li}>******</li>
                    </ul>
                </section>
            </div>
        </>
    );
}
