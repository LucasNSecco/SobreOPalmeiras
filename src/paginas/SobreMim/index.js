import PostModelo from "componentes/PostModelo";
import fotoCapa from '../../assets/video-2.3/assets/bandeiraitalia.png'

import styles from './SobreMim.module.css'
import fotoSobreMim from '../../assets/video-2.3/assets/palmeiras-log.png'

export default function SobreMim() {
    return (
        <PostModelo 
            fotoCapa={fotoCapa}
            titulo=""
        >
            <h3 className={styles.subtitulo}>
                Um pouco da minha história...
            </h3>

            <img    
                src={fotoSobreMim}
                alt="Foto sorrindo"
                className={styles.fotoSobreMim}
            
            />

            <p className={styles.paragrafo}>Bem-vindos ao mundo verde e emocionante do Palmeiras, o alviverde imponente! Fundado em 1914, este clube brasileiro carrega consigo uma rica história repleta de glórias e conquistas que o tornaram uma verdadeira lenda no cenário esportivo.</p>
            <p className={styles.paragrafo}>O Palmeiras é muito mais do que um simples time de futebol; é uma paixão que transcende gerações, unindo torcedores de todas as idades, culturas e origens sob um mesmo manto. Sua torcida apaixonada, conhecida como "a Família Palmeiras", é reconhecida mundialmente por sua lealdade e dedicação inabalável, tornando cada partida uma experiência única e arrebatadora.</p>
            <p className={styles.paragrafo}>A Academia de Futebol, centro de treinamento de excelência do Palmeiras, tem sido o berço de grandes talentos que se tornaram ídolos dentro e fora do campo. Os jogadores vestem o uniforme com honra, buscando sempre superar os limites e proporcionar aos torcedores momentos inesquecíveis de alegria e emoção.</p>
            <p className={styles.paragrafo}>Ao longo dos anos, o Palmeiras construiu uma galeria de troféus impressionante, com inúmeros títulos estaduais, nacionais e internacionais, incluindo a gloriosa conquista da Copa Libertadores da América e o brilho no cenário mundial ao sagrar-se campeão da Copa Rio Internacional em 1951.</p>
            <p className={styles.paragrafo}>A tradição e a inovação caminham lado a lado no Palmeiras, que continua a buscar excelência tanto no campo quanto fora dele. O compromisso com o desenvolvimento sustentável, a responsabilidade social e o respeito aos valores éticos são pilares fundamentais que sustentam a grandeza do clube.</p>
            <p className={styles.paragrafo}>Cada partida no Allianz Parque, a imponente arena que é nossa casa, é uma verdadeira festa. A vibração da torcida, os cânticos ensurdecedores e a energia contagiante tornam o estádio um verdadeiro caldeirão de emoções, onde o apoio incondicional é sentido por todos os que têm a honra de vestir o manto alviverde.</p>
            <p className={styles.paragrafo}>O Palmeiras é mais do que um clube; é uma paixão que une gerações, atravessa fronteiras e enche de orgulho o coração de milhões de torcedores espalhados pelo mundo. É com essa paixão e determinação que o Palmeiras segue em busca de novas vitórias, construindo um futuro brilhante com suas raízes fincadas em uma história repleta de glórias. Seja bem-vindo ao Palmeiras, a casa dos campeões! Avanti Palestra!</p>
        </PostModelo>    
    )
}