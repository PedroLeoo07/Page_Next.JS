import styles from "../styles/Home.module.css";
import { useRouter } from 'next/router';

export default function Home() {
    const router = useRouter();

    const handleSubmit = (event) => {
        event.preventDefault();
        router.push('/input'); 
    };

    return (
        <div className={styles.container}>
            <div className={styles.login}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <label className={styles.email}>Email</label>
                    <input className={styles.input1} type="text" />
                    <label className={styles.senha}>Senha</label>
                    <input className={styles.input2} type="password" />
                    <button className={styles.button} type="submit">Entrar</button>
                </form>
            </div>
        </div>
    );
}
