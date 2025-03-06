import styles from "../styles/Conteudo.module.css";
import { useRouter } from 'next/router';

export default function Conteudo() {
    const router = useRouter();

    const goBack = () => {
        router.push('/input');
    };

    return (
        <div className={styles.conteudo}>
            <h1>Conteúdo</h1>
            <p>Este é um exemplo de conteúdo. Vamos adicionar mais algumas informações para tornar esta página mais interessante.</p>
            <ul>
                <li>Informação interessante 1</li>
                <li>Informação interessante 2</li>
                <li>Informação interessante 3</li>
            </ul>
            <button className={styles.button} onClick={goBack}>Voltar</button>
        </div>
    );
}
