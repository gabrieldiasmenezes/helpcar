'use client';
import Link from "next/link";
import { useState } from "react";
import styles from "@/estiliacao/Orc.module.css";
import ChatBot from "@/app/chatbot";
import { servicosPrecos, sugerirServicos, calcularOrcamentoTotal } from "@/app/orcamentoUtils";

export default function Orcamento() {
    const [mostraMenu, setMostraMenu] = useState(false);
    const [formType, setFormType] = useState('');
    const [valorMaximo, setValorMaximo] = useState('');
    const [servicosDentroOrcamento, setServicosDentroOrcamento] = useState<string[]>([]);
    const [servicosEscolhidos, setServicosEscolhidos] = useState<string[]>([]);
    const [orcamentoTotal, setOrcamentoTotal] = useState(0);

    const mostrarM = () => setMostraMenu(true);
    const fecharM = () => setMostraMenu(false);
    const showFormA = () => setFormType('A');
    const showFormB = () => setFormType('B');
    
    const handleValorMaximoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValorMaximo(e.target.value);
    };

    const handleSugerirServicos = () => {
        setServicosDentroOrcamento(sugerirServicos(valorMaximo));
    };

    const adicionarServicoEscolhido = (servico: string) => {
        setServicosEscolhidos(prevEscolhidos => {
            if (prevEscolhidos.includes(servico)) return prevEscolhidos;
            return [...prevEscolhidos, servico];
        });
    };

    const handleCalcularOrcamentoTotal = () => {
        setOrcamentoTotal(calcularOrcamentoTotal(servicosEscolhidos));
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
                        <Link className={styles.link} href={'Agendamento'}>Agendamento</Link>
                        <Link className={styles.link} href={'Orcamento'}>Orçamento</Link>
                        <Link className={styles.link} href={'/'}>LogOut</Link>    
                    </section>
                )}

                <section className={styles.box1}>
                    <h1 className={styles.T1}>Faça seu orçamento</h1>
                    
                    <button onClick={showFormA} className={styles.button}>Orçamento pelo valor máximo</button>
                    {formType === 'A' && (
                        <form className={styles.listaDados} onSubmit={(e) => { e.preventDefault(); handleSugerirServicos(); }}>
                            <input 
                                type="number" 
                                className={styles.li} 
                                placeholder="Digite o valor máximo: R$" 
                                value={valorMaximo}
                                onChange={handleValorMaximoChange}
                                required 
                            />
                            <button type="submit" className={styles.buttonn}>Ver Orçamento</button>
                        </form>
                    )}
                    {servicosDentroOrcamento.length > 0 && (
                        <section className={styles.servicosDisponiveis}>
                            <h2>Serviços dentro do orçamento:</h2>
                            {servicosDentroOrcamento.map(servico => (
                                <p key={servico}>{servico} - R$ {servicosPrecos[servico as keyof typeof servicosPrecos]}</p>
                            ))}
                        </section>
                    )}

                    <button onClick={showFormB} className={styles.button}>Orçamento pelos serviços escolhidos</button>
                    {formType === 'B' && (
                        <form className={styles.listaDados} onSubmit={(e) => { e.preventDefault(); handleCalcularOrcamentoTotal(); }}>
                            <section className={styles.opc}>
                                <h2>Serviços oferecidos:</h2>
                                {Object.entries(servicosPrecos).map(([servico, preco]) => (
                                    <label key={servico} className={styles.checkboxContainer}>
                                        <input 
                                            type="checkbox" 
                                            value={servico} 
                                            className={styles.input}
                                            onChange={() => adicionarServicoEscolhido(servico)} 
                                        />
                                        {servico} - R$ {preco}
                                    </label>
                                ))}
                            </section>
                            <button type="submit" className={styles.buttonn}>Calcular Total</button>
                        </form>
                    )}
                    
                    {orcamentoTotal > 0 && (
                        <div className={styles.orcamentoTotal}>
                            <h2 className={styles.h2}>Resumo do Orçamento:</h2>
                            <p className={styles.p}>Total: R$ {orcamentoTotal.toFixed(2)}</p>
                        </div>
                    )}
                </section>
            </div>
            <ChatBot />
        </>
    );
}
