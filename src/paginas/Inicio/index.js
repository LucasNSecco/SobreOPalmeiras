import styles from './Inicio.module.css'

import posts from 'assets/video-3.1/json/posts.json'
import jogadores from 'assets/video-3.1/json/jogadores.json'
import PostCard from "componentes/PostCard";





export default function Inicio() {
    return (
            <ul className={styles.posts}>
                {jogadores.map((jogadores) =>(
                    <li key={jogadores.id}>
                        <PostCard jogadores={jogadores}/>
                    </li>
                ))}
            </ul>
    )
}