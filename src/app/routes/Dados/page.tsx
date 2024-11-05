'use client';
import Link from "next/link";
import styles from "@/estiliacao/Dados.module.css";
import { useState, useEffect } from "react";
import ChatBot from "@/app/chatbot";

type UsuarioProps = {
    nome: string;
    email: string;
    cpf: string;
    telefone: string;
    cep: string;
    rua: string;
    bairro: string;
    cidade: string;
    estado: string;
    idade: string;
};

export default function Dados() {
    const [mostraMenu, setMostraMenu] = useState(false);
    const [usuario, setUsuario] = useState<UsuarioProps | null>(null);

    const mostrarM = () => setMostraMenu(true);
    const fecharM = () => setMostraMenu(false);

    // Função para buscar os dados do usuário na API
    const fetchUsuario = async () => {
        try {
            const response = await fetch("http://localhost:8080/SPRINT4/rest/clientes", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (response.ok) {
                const data = await response.json();
                setUsuario(data);
            } else {
                console.error("Erro ao buscar dados do usuário:", await response.text());
            }
        } catch (error) {
            console.error("Erro de rede ao buscar dados do usuário:", error);
        }
    };

    // Chamar a função fetchUsuario quando o componente for carregado
    useEffect(() => {
        fetchUsuario();
    }, []);

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
                    <ul className={styles.listaDados}>
                        <li className={styles.li}><strong>Nome:</strong> {usuario?.nome || "N/A"}</li>
                        <li className={styles.li}><strong>Email:</strong> {usuario?.email || "N/A"}</li>
                        <li className={styles.li}><strong>CPF:</strong> {usuario?.cpf || "N/A"}</li>
                        <li className={styles.li}><strong>Telefone:</strong> {usuario?.telefone || "N/A"}</li>
                        <li className={styles.li}><strong>Endereço:</strong> {usuario ? `${usuario.rua}, ${usuario.bairro}, ${usuario.cidade} - ${usuario.estado}` : "N/A"}</li>
                        <li className={styles.li}><strong>CEP:</strong> {usuario?.cep || "N/A"}</li>
                        <li className={styles.li}><strong>Idade:</strong> {usuario?.idade || "N/A"}</li>
                    </ul>
                </section>
            </div>
            <ChatBot />
        </>
    );
}
