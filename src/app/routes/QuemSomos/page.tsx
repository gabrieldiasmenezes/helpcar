'use client';
import Link from "next/link";
import {  useState } from "react";
import styles from '@/estiliacao/QS.module.css'

export default function QuemSomos() {
    const [mostraMenu, setMostraMenu] = useState(false);
    const mostrarM = () => {
        setMostraMenu(true);
    };
    const fecharM = () => {
        setMostraMenu(false);
    };

    return (
        <>
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

            <section className={styles.Titulos}>
                <h1 className={styles.t1}>Quem <span className={styles.t21}>Somos</span></h1>  
                <p className={styles.p1}>Somos uma empresa que visa ajudar os motoristas a agilizarem o seu tempo caso tenham problemas em seus veículos a partir da utilização de um chat bot.</p>
            </section>

            <section id="Int" className={styles.Box}>
                <h1 className={styles.t2}>Integrantes</h1>
                <section className={styles.Int}>
                    <section className={styles.Int1}>
                        <img className={styles.img2} src="/gabriel.jfif" width="189px" height="329px" alt="Agendamento" />
                        <h2 className={styles.t4}>Gabriel Dias Menezes</h2>
                        <p className={styles.p4}>RM:555019</p>
                        <a href="https://github.com/gabrieldiasmenezes" className={styles.g1}>Git Hub</a>
                    </section>
                    <section className={styles.Int1}>
                        <img className={styles.img3} src="/julia.enc" width="189px" height="329px" alt="Orcamento" />
                        <h2 className={styles.t4}>Júlia Soares Farias dos Santos</h2>
                        <p className={styles.p4}>RM:554609</p>
                        <a href="https://github.com/jyx97" className={styles.g1}>Git Hub</a>
                    </section>
                    <section className={styles.Int1}>
                        <img className={styles.img4} src="/hellen.jfif" width="189px" height="329px" alt="Delivery" />
                        <h2 className={styles.t4}>Hellen Marinho Cordeiro</h2>
                        <p className={styles.p4}>RM:558841</p>
                        <a href="https://github.com/hmarinhoo" className={styles.g1}>Git Hub</a>
                    </section>
                </section>
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
