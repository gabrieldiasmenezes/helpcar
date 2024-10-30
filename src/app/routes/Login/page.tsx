'use client';
import Link from "next/link";
import styles from '@/estiliacao/Login.module.css'

export default function Login() {
    return (
        <>
            <div id="adiona" className={styles.containerAdiciona}>
                <div className={styles.modal}>
                    <h3 className={styles.subtitulo}>Login</h3>
                    <form action="Usuario" className={styles.formulario}>
                        <input className={styles.input} type="email" placeholder="Digite o seu email" required /><br />
                        <input className={styles.input} type="password" maxLength={6} placeholder="Digite sua senha" required /><br />
                        <p className={styles.Nconta}>
                            Não tem uma conta? <Link href={'Cadastro'} className={styles.cad}>Crie uma conta Aqui</Link>
                        </p>
                        <button className={styles.btAdd}>Login</button>
                    </form>
                </div>
            </div>
        </>
    );
}
