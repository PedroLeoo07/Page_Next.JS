import styles from "../styles/Conteudo.module.css";
import { useRouter } from 'next/router';

export default function Conteudo() {
    const router = useRouter();

    const goBack = () => {
        router.push('/input');
    };

    return (
        <div className={styles.conteudo}>
            <div className={styles.port}>
                <img className={styles.img} src="../public/eu.png" alt="Dev Olhando pra câmera" />
            <h1 className={styles.title}>Sobre Mim</h1>
            <p className={styles.p}>O meu nome é Leonardo Oliveira atualmente tenho 17 anos, atualmente
            estou estudando na rede Sesi e Senai, na rede Sesi estou no 
            meu último ano e com grandes expectativas pro futuro, no 
            Senai estou estudando técnico em análise de desenvolvimento de sistemas...
            futuramente pretendo seguir a área de desenvolvimento e conseguir várias oportunidades
            </p>
            <ul className={styles.ul}>
                <h3 className={styles.title}>Interesses</h3>
                <p className={styles.p}>Gosto muito de Ler(especificamente livros cristãos)</p>
                <p className={styles.p}>Amo ouvir música e tocar também</p>
                <p className={styles.p}>Gosto de jogar alguns jogos de mundo aberto</p>
            </ul>
            <ul className={styles.ul}>
                <h3 className={styles.title}>Gostos</h3>
                <p className={styles.p}>No meu tempo livre gosto bastante de treinar</p>
                <p className={styles.p}>Eu gosto bastante de escrever</p>
            </ul>
            <ul className={styles.ul}>
                <h2 className={styles.habilidades}>Habilidades</h2>
                <h3 className={styles.titleHab}>Front-End</h3>
                <div className={styles.div}>
                <img className={styles.img} src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/html.png" alt="Logo do HTML5" />
                <img className={styles.img} src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/css.png" alt="Logo do CSS" />
                <img className={styles.img} src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/react.png" alt="Logo do React" />
                <img className={styles.img} src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/next_js.png" alt="Logo do Next.js" />
                <img className={styles.img} src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/javascript.png" alt="Logo do JavaScript" />
                </div>
                <h3 className={styles.hab}>Back-End</h3>
                <div className={styles.div}>
                <img className={styles.img} src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/javascript.png" alt="Logo do JavaScript" />
                <img className={styles.img} src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/node_js.png" alt="Logo do Node.js" />
                <img className={styles.img} src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/express.png" alt="Logo do Express.js" />
                </div>
                <h3 className={styles.hab}>Banco de Dados</h3>
                <div className={styles.div}>
               <img className={styles.img}src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/postgresql.png" alt="Logo do PostgreSQL" />
               <img className={styles.img} src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mysql.png" alt="Logo do MySQL" />
                </div>  
                </ul>
                <ul className={styles.ul}>
            <h3 className={styles.hab}>Minhas Redes Sociais</h3>
            <div className={styles.div}>
              <a href="https://www.instagram.com/oliveir._leo/"> <img className={styles.img} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/640px-Instagram_icon.png" alt="Logo do Instagram" /></a> 
              <a href="https://github.com/PedroLeoo07">  <img className={styles.img} src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="Logo do GitHub" /></a> 
              <a href="https://www.linkedin.com/in/leonardo-oliveira-38aab7321/">  <img className={styles.img} src="https://static.vecteezy.com/system/resources/previews/018/930/480/non_2x/linkedin-logo-linkedin-icon-transparent-free-png.png" alt="Logo do LinkedIn" /> </a> 
                </div>
                </ul>
            <button className={styles.button} onClick={goBack}>Voltar</button>
            </div>
           
        </div>
    );
}
