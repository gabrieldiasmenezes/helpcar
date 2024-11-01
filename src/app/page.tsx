'use client';
import styles from "./page.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [mostraMenu, setMostraMenu] = useState(false);
  
  const mostrarM = () => {
    setMostraMenu(true);
  }
  
  const fecharM = () => {
    setMostraMenu(false);
  }
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
      {/* Cabecalho */}
      <header className={styles.Cabecalho}>
        <h1 className={styles.Titulo}>
          <Link className={styles.t} href="/">HelpCar</Link>
        </h1>
        <nav className={styles.Menu}>
          <ul className={styles.link}>
            <Link href="/routes/QuemSomos" className={styles.QuemSomos}>Quem Somos</Link>
            <Link href="/routes/Info" className={styles.Sobre}>Sobre o site</Link>
          </ul>
        </nav>
        <ul className={styles.Login}>
          <Link href="/routes/Login" className={styles.Entrar}>Entrar</Link>
          
            <Link href="https://github.com/gabrieldiasmenezes/helpcar" className={styles.github}>
              <img src="/gitHub.png" className={styles.github} width="90px" height="60px" alt="GitHub"/>
            </Link>
                    
        </ul>
        <ul onClick={mostrarM} className={styles.btMenu}>
          <li>_____</li>
          <li>_____</li>
          <li>_____</li>
        </ul>
      </header>

      {mostraMenu && (
        <section className={`${styles.MenuM} ${styles.mostrar}`}>
          <Link href="/routes/Login" className={styles.EntrarM}>Entrar</Link>
          <button className={styles.Fechar} onClick={fecharM}>x</button>
          <Link href="/routes/QuemSomos" className={styles.QuemSomosM}>Quem Somos</Link>
          <Link href="/routes/Info" className={styles.SobreM}>Sobre o site</Link>
          <Link href="https://github.com/gabrieldiasmenezes/helpcar" className={styles.githubM}>
            <img src="gitHub.png" className={styles.githubM} width="90px" height="60px" alt="GitHub"/>
          </Link>    
        </section>
      )}

      {/* Titulo site */}
      <section className={styles.Titulos}>
        <h1 className={styles.t1}>Help <span className={styles.t21}>Car</span></h1>
        <p className={styles.p1}>Site especializado em ajudar nos problemas automotivos dos nossos Usuários.</p>
        <Link className={styles.bt1} href="/routes/Info">
          <button className={styles.but}>Saiba Mais</button>
        </Link>
      </section>

      <section className={styles.box2}>
        <h2 className={styles.t6}>Nosso Site</h2>
        <p className={styles.p5}>A Help Car tem como objetivo ajudar os nossos Usuários com questões relacionadas aos seus veículos, oferecendo serviços desde agendamentos, autodiagnóstico e orçamentos, tudo feito pelo nosso chatbot.</p>
      </section>

      <footer className={styles.rodape}>
        <section className={styles.c}>
          <h2 className={styles.tituloR}>Serviços do Bot</h2>
          <p className={styles.i1}>Agendamentos</p>
          <p className={styles.i1}>Orçamentos</p>
          <p className={styles.i1}>Mecânico Delivery</p>
        </section>
        <section className={styles.c}>
          <h2 className={styles.tituloR}>Informações</h2>
          <p><Link className={styles.i} href="/routes/QuemSomos">Quem Somos</Link></p>
          <p><Link className={styles.i} href="/routes/Info">Sobre o site</Link></p>
        </section>
        <section className={styles.c}>
          <h2 className={styles.tituloR}>Funcionalidades</h2>
          <p className={styles.i1}>Chat Bot</p>
        </section>
      </footer>
      
    </>
  );
}