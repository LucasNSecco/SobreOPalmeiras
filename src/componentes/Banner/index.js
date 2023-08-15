import styles from './Banner.module.css'
import circuloColorido from 'assets/video-2.3/assets/italia_redonda-removebg-preview.png'
import minhaFoto from '../../assets/video-2.3/assets/palmeiras-log.png'

export default function Banner(){
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Palmeirenses!
                </h1>

                <p className={styles.paragrafo}>
                    Este o nosso elenco da temporada 2023.
                </p>
            </div>
            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                    alt='imagem'
                />

                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt='Foto do Lucas'
                />
            </div>
        </div>
    )
}