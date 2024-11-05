'use client';
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from '@/estiliacao/Veiculos.module.css';
import ChatBot from "@/app/chatbot";

type AgendaProps = {
    servico: string;
    data: string;
    hora: string;
};

export default function Agendamento() {
    const [mostraMenu, setMostraMenu] = useState(false);
    const mostrarM = () => setMostraMenu(true);
    const fecharM = () => setMostraMenu(false);

    const [mostraPopup, setMostraPopup] = useState(false);
    const mostrar = () => setMostraPopup(true);
    const retirar = () => setMostraPopup(false);

    const dadosAge = {
        servico: '',
        data: '',
        hora: ''
    };

    const [agenda, setAgenda] = useState<AgendaProps>(dadosAge);
    const [agendas, setAgendas] = useState<AgendaProps[]>([]);
    const [erro, setErro] = useState("");

    // Função para buscar agendamentos do backend
    const fetchAgendamentos = async () => {
        try {
            const response = await fetch("http://localhost:8080/SPRINT4/rest/agendamentos", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await response.json();
            if (response.ok) {
                setAgendas(data);
                setErro(""); // Limpa o erro em caso de sucesso
            } else {
                setErro("Erro ao carregar os agendamentos.");
            }
        } catch (error) {
            console.error("Erro de rede:", error);
            setErro("Erro de rede. Tente novamente mais tarde.");
        }
    };

    // Carrega os agendamentos ao montar o componente
    useEffect(() => {
        fetchAgendamentos();
    }, []);

    // Atualiza o estado ao digitar no formulário
    const digAge = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setAgenda({ ...agenda, [name]: value });
    };

    // Função para enviar o agendamento para o backend
    const cadAge = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8080/SPRINT4/rest/agendamentos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(agenda)
            });
            if (response.ok) {
                // Se o agendamento for salvo com sucesso, recarregue a lista de agendamentos
                fetchAgendamentos();
                setAgenda(dadosAge);
                setMostraPopup(false); // Fecha o popup após o agendamento
                setErro(""); // Limpa o erro em caso de sucesso
            } else {
                setErro("Erro ao salvar o agendamento.");
            }
        } catch (error) {
            console.error("Erro de rede:", error);
            setErro("Erro de rede. Tente novamente mais tarde.");
        }
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
                    {erro && <p className={styles.erro}>{erro}</p>} {/* Exibe o erro se houver */}
                    <section className={styles.Armazena}>
                        <button onClick={mostrar} className={styles.botao1}>Fazer Agendamento</button>
                    </section>
                    <div className={styles.Painel}>
                        {agendas.map((a, i) => (
                            <div key={i} className={styles.Vvec}>
                                <p className={styles.texto}>Serviço: {a.servico}</p><br />
                                <p className={styles.texto}>Data: {a.data}</p><br />
                                <p className={styles.texto}>Hora: {a.hora}</p><br />
                            </div>
                        ))}
                    </div>
                </section>

                {mostraPopup && (
                    <div className={`${styles['container-adiciona']} ${styles.mostrar}`}>
                        <div className={styles.modal}>
                            <button className={styles.Fechar} onClick={retirar}>x</button>
                            <h3 className={styles.subtitulo}>Agendamento</h3>
                            {erro && <p className={styles.erro}>{erro}</p>} {/* Exibe o erro no formulário, se houver */}
                            <form onSubmit={cadAge} className={styles.formulario}>
                                <input className={styles.input} type="text" name="servico" onChange={digAge} value={agenda.servico} placeholder="Digite o servico desejado" required /><br />
                                <input className={styles.input} type="date" name="data" onChange={digAge} value={agenda.data} placeholder="Dia" required /><br />
                                <input className={styles.input} type="time" name="hora" onChange={digAge} value={agenda.hora} placeholder="Hora" required /><br />
                                
                                <button type="submit" className={styles.btAdd}>Agendar</button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
            <ChatBot/>
        </>
    );
}
