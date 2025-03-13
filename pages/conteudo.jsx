import styles from "../styles/Conteudo.module.css";
import { useRouter } from 'next/router';

export default function Conteudo() {
    const router = useRouter();

    const goBack = () => {
        router.push('/input');
    };

    return (
        <div className={styles.conteudo}>
            <h1 className={styles.title}>Sobre Mim</h1>
            <p className={styles.p}>O meu nome é Leonardo Oliveira atualmente tenho 17 anos, atualmente
            estou estudando na rede Sesi e Senai, na rede Sesi estou no 
            meu último ano e com grandes expectativas pro futuro, no 
            Senai estou estudando técnico em análise de desenvolvimento de sistemas...
            futuramente pretendo seguir a área de desenvolvimento e conseguir várias oportunidades
            </p>
            <ul>
                <h3 className={styles.title}>Interesses</h3>
                <p className={styles.p}>Gosto muito de Ler(especificamente livros cristãos)</p>
                <p className={styles.p}>Amo ouvir música e tocar também</p>
                <p className={styles.p}>Gosto de jogar alguns jogos de mundo aberto</p>
            </ul>
            <ul>
                <h3 className={styles.title}>Gostos</h3>
                <p className={styles.p}>No meu tempo livre gosto bastante de treinar</p>
                <p className={styles.p}>Eu gosto bastante de escrever</p>
            </ul>
            <button className={styles.button} onClick={goBack}>Voltar</button>
        </div>
    );
}
