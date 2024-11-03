'use client';
import Link from "next/link";
import {  useState } from "react";
import styles from '@/estiliacao/Veiculos.module.css';
import ChatBot from "@/app/chatbot"
type AgendaProps = {
    mecanica:string,
    data:string,
    hora:string,
};


export default function Agendamento() {
    const [mostraMenu, setMostraMenu] = useState(false);
    const mostrarM = () => setMostraMenu(true);
    const fecharM = () => setMostraMenu(false);

    const [mostraPopup, setMostraPopup] = useState(false);
    const mostrar = () => setMostraPopup(true);
    const retirar = () => setMostraPopup(false);

    const dadosAge = {
        mecanica:'',
        data:'',
        hora:''
    };
    const [agenda, setAgenda] = useState<AgendaProps>(dadosAge);
    const [agendas, setAgendas] = useState<AgendaProps[]>([]);

    const digAge = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setAgenda({ ...agenda, [name]: value });
    };

    const cadAge = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setAgendas([...agendas, agenda]);
        setAgenda(dadosAge);
    };
    

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
                        <Link className={styles.link} href={'/'}>LogOut</Link>
                    </section>
                )}
                
                <section className={styles.box1}>
                    <h1 className={styles.T1}>Agendamentos</h1>
                    <section className={styles.Armazena}>
                        <button id="botao1" onClick={mostrar} className={styles.botao1}>Fazer Agendamento</button>
                    </section>
                    <div className={styles.Painel}>
                        {agendas.map((a, i) => (
                            <div key={i} className={styles.Vvec}>
                                <p className={styles.texto}>Mecanica: {a.mecanica}</p><br />
                                <p className={styles.texto}>Data: {a.data}</p><br />
                                <p className={styles.texto}>Hora: {a.hora}</p><br />
                                
                            </div>
                        ))}
                    </div>
                </section>

                {mostraPopup && (
                    <div id="adiona" className={`${styles['container-adiciona']} ${styles.mostrar}`}>
                        <div className={styles.modal}>
                            <button className={styles.Fechar} onClick={retirar}>x</button>
                            <h3 className={styles.subtitulo}>Agendamento</h3>
                            <form onSubmit={cadAge} className={styles.formulario}>
                                <input className={styles.input} type="text" name="placa" onChange={digAge} value={agenda.mecanica} maxLength={8} placeholder="Digite a placa do seu veiculo" required /><br />
                                <input className={styles.input} type="text" name="ano_fab" onChange={digAge} value={agenda.data} placeholder="Ano de fabricação" required /><br />
                                <input className={styles.input} type="text" name="ano_model" onChange={digAge} value={agenda.hora} placeholder="Ano do modelo" required /><br />
                                
                                <button type="submit" className={styles.btAdd}>Adicionar Veiculo</button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
            <ChatBot/>
        </>
    );
}
