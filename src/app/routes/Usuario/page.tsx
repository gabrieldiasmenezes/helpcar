'use client';
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from '@/estiliacao/Usuario.module.css';

export default function Usuario() {
    const [mostraMenu, setMostraMenu] = useState(false);
    
    const mostrarM = () => {
        setMostraMenu(true);
    };
    const fecharM = () => {
        setMostraMenu(false);
    };
    useEffect(() => {
        window.watsonAssistantChatOptions = {
          integrationID: "d9e8d383-5b1f-4852-8cd9-d04a58c9fb25", // The ID of this integration.
          region: "us-south", // The region your integration is hosted in.
          serviceInstanceID: "101833fd-0f14-4141-b131-7bf1dfb686d5", // The ID of your service instance.
          onLoad: async (instance) => { await instance.render(); }
        };
    
        const script = document.createElement('script');
        script.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
        document.head.appendChild(script);
    
        return () => {
          // Limpeza do script se necessário
          document.head.removeChild(script);
        };
      }, []);

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
