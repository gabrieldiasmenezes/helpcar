'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from "react";
import styles from '@/estiliacao/Cadastro.module.css'; 
import React from 'react';

type UsuarioProps = {
    nome: string;
    email: string;
    cpf: string;
    cep: string;
    rua: string;
    numero: string;
    bairro: string;
    cidade: string;
    estado: string;
    senha: string;
};

export default function Cadastro() {
    const router = useRouter();
    const dadosUsuario = {
        nome: '',
        cpf: '',
        email: '',
        cep: '',
        rua: '',
        numero: '',
        bairro: '',
        cidade: '',
        estado: '',
        senha: ''
    };

    const [usuario, setUsuario] = useState<UsuarioProps>(dadosUsuario);
    const [usuarios, setUsuarios] = useState<UsuarioProps[]>([]);

    const digUsuario = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUsuario({ ...usuario, [name]: value });
    };

    const cadUsuario = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setUsuarios([...usuarios, usuario]);
        setUsuario(dadosUsuario);

        // Redireciona para a página "Usuario" após o cadastro
        router.push("Usuario");
    };

    const cepBlur = useRef<HTMLInputElement>(null);
    const numFoco = useRef<HTMLInputElement>(null);

    const buscarCep = (e: React.FocusEvent<HTMLInputElement>) => {
        const cep = e.target.value.replace(/\D/g, '');
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(data => {
                setUsuario({
                    ...usuario,
                    rua: data.logradouro,
                    bairro: data.bairro,
                    cidade: data.localidade,
                    estado: data.uf
                });
            });
        if (cepBlur.current) numFoco.current?.focus();
    };

    return (
        <div id="adiona" className={styles.containerAdiciona}>
            <div className={styles.modal}>
                <h3 className={styles.subtitulo}>Cadastro</h3>
                <form onSubmit={cadUsuario} className={styles.formulario}>
                    <input
                        className={styles.input}
                        name="nome"
                        type="text"
                        onChange={digUsuario}
                        value={usuario.nome}
                        placeholder="Nome"
                        required
                    /><br />
                    <input
                        className={styles.input}
                        name="cpf"
                        type="text"
                        onChange={digUsuario}
                        value={usuario.cpf}
                        placeholder="CPF"
                        required
                    /><br />
                    <input
                        className={styles.input}
                        name="email"
                        type="email"
                        onChange={digUsuario}
                        value={usuario.email}
                        placeholder="Digite o seu email"
                        required
                    /><br />
                    <input
                        className={styles.input}
                        name="cep"
                        type="text"
                        maxLength={9}
                        onBlur={buscarCep}
                        onChange={digUsuario}
                        value={usuario.cep}
                        placeholder="Digite seu CEP"
                        required
                    /><br />
                    <input
                        className={styles.input}
                        name="rua"
                        type="text"
                        maxLength={50}
                        onChange={digUsuario}
                        value={usuario.rua}
                        placeholder="Rua"
                        required
                    /><br />
                    <input
                        className={styles.input}
                        name="numero"
                        type="text"
                        maxLength={5}
                        onChange={digUsuario}
                        value={usuario.numero}
                        placeholder="Número"
                        required
                    /><br />
                    <input
                        className={styles.input}
                        name="cidade"
                        type="text"
                        maxLength={50}
                        onChange={digUsuario}
                        value={usuario.cidade}
                        placeholder="Cidade"
                        required
                    /><br />
                    <input
                        className={styles.input}
                        name="estado"
                        type="text"
                        maxLength={2}
                        onChange={digUsuario}
                        value={usuario.estado}
                        placeholder="Estado"
                        required
                    /><br />
                    <input
                        className={styles.input}
                        name="senha"
                        type="password"
                        maxLength={6}
                        onChange={digUsuario}
                        value={usuario.senha}
                        placeholder="Digite uma senha"
                        required
                    /><br />
                    <button type="submit" className={styles.botaoAdicionar}>Cadastrar</button>
                </form>
            </div>
        </div>
    );
}
