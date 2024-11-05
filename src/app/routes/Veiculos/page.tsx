'use client';
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from '@/estiliacao/Veiculos.module.css';
import ChatBot from "@/app/chatbot";

type VeiculoProps = {
    cpf: string,
    placa: string,
    ano: string,
    marca: string,
    modelo: string,
};

export default function Veiculos() {
    const [mostraMenu, setMostraMenu] = useState(false);
    const mostrarM = () => setMostraMenu(true);
    const fecharM = () => setMostraMenu(false);

    const [mostraPopup, setMostraPopup] = useState(false);
    const mostrar = () => setMostraPopup(true);
    const retirar = () => setMostraPopup(false);

    const dadosVec = {
        cpf: '',
        placa: '',
        ano: '',
        marca: '',
        modelo: '',
    };

    const [veiculo, setVeiculo] = useState<VeiculoProps>(dadosVec);
    const [veiculos, setVeiculos] = useState<VeiculoProps[]>([]);

    // Fetch veiculos on component load
    useEffect(() => {
        fetchVeiculos();
    }, []);

    const fetchVeiculos = async () => {
        try {
            const response = await fetch("http://localhost:8080/veiculos", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (response.ok) {
                const data = await response.json();
                setVeiculos(data);
            } else {
                console.error("Failed to fetch veiculos");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const digVec = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setVeiculo({ ...veiculo, [name]: value });
    };

    const cadVec = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8080/SPRINT4/rest/veiculos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(veiculo)
            });
            if (response.ok) {
                fetchVeiculos(); // Refresh list after adding
                setVeiculo(dadosVec);
                retirar();
            } else {
                console.error("Failed to add veiculo");
            }
        } catch (error) {
            console.error("Error:", error);
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
                    <section className={styles.Menu}>
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
                    <h1 className={styles.T1}>Gerenciamento de Veiculos</h1>

                    <section className={styles.Armazena}>
                        <button id="botao1" onClick={mostrar} className={styles.botao1}>Adicionar Veiculo</button>
                    </section>
                    <div className={styles.Painel}>
                        {veiculos.map((v, i) => (
                            <div key={i} className={styles.Vvec}>
                                <p className={styles.texto}>Placa: {v.placa}</p><br />
                                <p className={styles.texto}>Ano de Fabricação: {v.ano}</p><br />
                                <p className={styles.texto}>Marca: {v.marca}</p><br />
                                <p className={styles.texto}>Modelo: {v.modelo}</p><br />
                            </div>
                        ))}
                    </div>
                </section>

                {mostraPopup && (
                    <div id="adiona" className={`${styles['container-adiciona']} ${styles.mostrar}`}>
                        <div className={styles.modal}>
                            <button className={styles.Fechar} onClick={retirar}>x</button>
                            <h3 className={styles.subtitulo}>Adicione o seu Veiculo</h3>
                            <form onSubmit={cadVec} className={styles.formulario}>
                                <input className={styles.input} type="text" name="cpf" onChange={digVec} value={veiculo.cpf} maxLength={12} placeholder="Digite o cpf do proprietário" required /><br />
                                <input className={styles.input}  type="text" name="placa" onChange={digVec} value={veiculo.placa} maxLength={8} placeholder="Digite a placa do seu veiculo" required /><br />
                                <input className={styles.input} type="text" name="ano" onChange={digVec} value={veiculo.ano} placeholder="Ano do Veículo:" required /><br />
                                <input className={styles.input} type="text" name="marca" onChange={digVec} value={veiculo.marca} placeholder="Marca" required /><br />
                                <input className={styles.input} type="text" name="modelo" onChange={digVec} value={veiculo.modelo} placeholder="Modelo" required /><br />
                                <button type="submit" className={styles.btAdd}>Adicionar Veiculo</button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
            <ChatBot />
        </>
    );
}
