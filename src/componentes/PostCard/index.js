import { Link } from 'react-router-dom'
import styles from './Post.module.css'
import BotaoPrincipal from 'componentes/BotaoPrincipal'


export default function PostCard({ jogadores }){
    return (
        <Link to={`/posts/${jogadores.id}`}>
            <div className={styles.post}>
            <img 
                className={styles.capa}
                src={`/elenco/${jogadores.id}/capa.png`}
                alt='Imagem do post'
            />

            <h2 className={styles.titulo}>{jogadores.Titulo}</h2>
            <h3 className={styles.subtitulo}>{jogadores.Subtitulo}</h3>

            <BotaoPrincipal>Saiba mais</BotaoPrincipal>
            </div>
        </Link>
        
    )
}