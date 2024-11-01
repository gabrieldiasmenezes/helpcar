'use client';
import Link from "next/link";
import {  useEffect, useState } from "react";
import styles from '@/estiliacao/Veiculos.module.css';

type VeiculoProps = {
    placa: string,
    ano_fab: string,
    ano_model: string,
    marca: string,
    modelo: string,
    cor: string,
    segmento: string,
    tipo_comb: string
};


export default function Veiculos() {
    const [mostraMenu, setMostraMenu] = useState(false);
    const mostrarM = () => setMostraMenu(true);
    const fecharM = () => setMostraMenu(false);

    const [mostraPopup, setMostraPopup] = useState(false);
    const mostrar = () => setMostraPopup(true);
    const retirar = () => setMostraPopup(false);

    const dadosVec = {
        placa: '',
        ano_fab: '',
        ano_model: '',
        marca: '',
        modelo: '',
        cor: '',
        segmento: '',
        tipo_comb: ''
    };
    const [veiculo, setVeiculo] = useState<VeiculoProps>(dadosVec);
    const [veiculos, setVeiculos] = useState<VeiculoProps[]>([]);

    const digVec = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setVeiculo({ ...veiculo, [name]: value });
    };

    const cadVec = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setVeiculos([...veiculos, veiculo]);
        setVeiculo(dadosVec);
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
                    <h1 className={styles.T1}>Gerenciamento de Veiculos</h1>
                    <section className={styles.Armazena}>
                        <button id="botao1" onClick={mostrar} className={styles.botao1}>Adicionar Veiculo</button>
                    </section>
                    <div className={styles.Painel}>
                        {veiculos.map((v, i) => (
                            <div key={i} className={styles.Vvec}>
                                <p className={styles.texto}>Placa: {v.placa}</p><br />
                                <p className={styles.texto}>Ano de Fabricação: {v.ano_fab}</p><br />
                                <p className={styles.texto}>Ano do modelo: {v.ano_model}</p><br />
                                <p className={styles.texto}>Marca: {v.marca}</p><br />
                                <p className={styles.texto}>Modelo: {v.modelo}</p><br />
                                <p className={styles.texto}>Cor: {v.cor}</p><br />
                                <p className={styles.texto}>Segmento: {v.segmento}</p><br />
                                <p className={styles.texto}>Tipo de Combustivel: {v.tipo_comb}</p><br />
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
                                <input className={styles.input} type="text" name="placa" onChange={digVec} value={veiculo.placa} maxLength={8} placeholder="Digite a placa do seu veiculo" required /><br />
                                <input className={styles.input} type="text" name="ano_fab" onChange={digVec} value={veiculo.ano_fab} placeholder="Ano de fabricação" required /><br />
                                <input className={styles.input} type="text" name="ano_model" onChange={digVec} value={veiculo.ano_model} placeholder="Ano do modelo" required /><br />
                                <input className={styles.input} type="text" name="marca" onChange={digVec} value={veiculo.marca} placeholder="Marca" required /><br />
                                <input className={styles.input} type="text" name="modelo" onChange={digVec} value={veiculo.modelo} placeholder="Modelo" required /><br />
                                <input className={styles.input} type="text" name="cor" onChange={digVec} value={veiculo.cor} placeholder="Cor" required /><br />
                                <input className={styles.input} type="text" name="segmento" onChange={digVec} value={veiculo.segmento} placeholder="Segmento" required /><br />
                                <input className={styles.input} type="text" name="tipo_comb" onChange={digVec} value={veiculo.tipo_comb} placeholder="Tipo de Combustivel" required /><br />
                                <button type="submit" className={styles.btAdd}>Adicionar Veiculo</button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
