'use client';
import { useState } from "react";
import Link from "next/link";
import styles from '@/estiliacao/Informacoes.module.css'; // Importa o CSS Module


export default function Informacao() {

    const [mostraMenu, setMostraMenu] = useState(false);
    const mostrarM = () => {
        setMostraMenu(true);
    }
    const fecharM = () => {
        setMostraMenu(false);
    }
   

    return (
        <>
            <header className={styles.Cabecalho}>
                <h1 className={styles.Titulo}>
                    <Link className={styles.t} href={'/'}>HelpCar</Link>
                </h1>
                <nav className={styles.Menu}>
                    <ul className={styles.links}>
                        <Link href={'QuemSomos'} className={styles.QuemSomos}>Quem Somos</Link>
                        <Link href={'Info'} className={styles.Sobre}>Sobre o site</Link>
                    </ul>
                </nav>
                <ul className={styles.Login}>
                    <Link href="/routes/Login" className={styles.Entrar}>Entrar</Link>
                    <Link href={'https://github.com/gabrieldiasmenezes/helpcar'} className={styles.github}>
                        <img src="/gitHub.png" className={styles.github} width="90px" height="60px" alt="GitHub" />
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
                    <Link href={'QuemSomos'} className={styles.QuemSomosM}>Quem Somos</Link>
                    <Link href={'Info'} className={styles.SobreM}>Sobre o site</Link>
                    <Link href={'https://github.com/gabrieldiasmenezes/helpcar'} className={styles.githubM}>
                        <img src="/gitHub.png" className={styles.githubM} width="90px" height="60px" alt="GitHub" />
                    </Link>
                </section>
            )}
            <section className={styles.Titulos}>
                <h1 className={styles.t1}>Sobre o <span className={styles.t21}>Site</span></h1>
                <p className={styles.p1}>
                    Nós somos uma empresa que visa ajudar os motoristas a agilizarem o seu tempo caso tenham problemas em seus veículos a partir da utilização de um chat bot.
                </p>
            </section>
            <section className={styles.Info2}>
                <h1 className={styles.t2}>Agendamento</h1>
                <p className={styles.p6}>
                    Nosso agendamento é feito de forma rápida e simples apenas fazendo perguntas e escolhendo um horário ideal para o cliente e que se encaixe com a agenda de serviços da oficina mecânica escolhida.
                    Caso o usuário não saiba em qual oficina ir, ajudamos a escolher a partir da situação do cliente e o ajudando a escolher uma mecânica ideal ao problema e à localização do usuário.
                </p>
            </section>
            <section className={styles.Info3}>
                <h1 className={styles.t3}>Orçamentos</h1>
                <p className={styles.p7}>
                    O orçamento é feito de forma rápida e com perguntas voltadas ao problema que o veículo do usuário está enfrentando e calculamos um orçamento médio para otimizar o tempo do cliente e informá-lo o valor que precisará ser gasto por ele.
                    Além disso, possibilitamos que, caso o orçamento não entre nas condições do cliente, calcular outros valores mais em conta à situação.
                </p>
            </section>
            <section className={styles.Info4}>
                <h1 className={styles.t4}>Autodiagnóstico</h1>
                <p className={styles.p8}>
                    Nosso principal objetivo é resolver seus problemas agilizando o seu tempo,o autodiagnóstico será a sua salvação para os seus prooblemas automotivos apenas falando com o nosso chatbot.Ele fará perguntas rápidas e diretas e te dará algumas possiveis causas e possiveis soluções para resolvê-los.
                </p>
            </section>
            <section className={styles.Info5}>
                <h1 className={styles.t5}>Chat Bot</h1>
                <p className={styles.p9}>
                    A função do chat bot é ajudar com qualquer problema automotivo dos usuários fazendo um auto diagnóstico para informar os problemas ao usuário. Além disso, junta as outras funcionalidades citadas acima para assim solucionar ao máximo os problemas dos clientes.
                </p>
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
                    <p><Link className={styles.i} href={'routes/QuemSomos'}>Quem Somos</Link></p>
                    <p><Link className={styles.i} href={'routes/Info'}>Sobre o site</Link></p>
                </section>
                <section className={styles.c}>
                    <h2 className={styles.tituloR}>Funcionalidades</h2>
                    <p className={styles.i1}>Chat Bot</p>
                </section>
            </footer>

        </>
    );
}
