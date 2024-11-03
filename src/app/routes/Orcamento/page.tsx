'use client'
import Link from "next/link";
import styles from "@/estiliacao/Orc.module.css"
import { useState } from "react";
import ChatBot from "@/app/chatbot"

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
                    <Link className={styles.link} href={'Agendamento'}>Agendamento</Link>
                    <Link className={styles.link} href={'Orcamento'}>Orçamento</Link>
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
                <Link className={styles.link} href={'Agendamento'}>Agendamento</Link>
                <Link className={styles.link} href={'Orcamento'}>Orçamento</Link>
                <Link className={styles.link} href={'/'}>LogOut</Link>    
                </section>
                )}
                <section className={styles.box1}>
                    <h1 className={styles.T1}>Seus Dados</h1>
                    <form className={styles.listaDados}>
                        <input type="text" className={styles.li} placeholder="Digite um valor para o seu orçamento" required />
                        <input type="text" className={styles.li} placeholder="Digite um serviço de preferência" required />
                        <button className={styles.button}>Calcule o orçamento</button>
                    </form>
                </section>
            </div>
            <ChatBot/>
        </>
    );
}
