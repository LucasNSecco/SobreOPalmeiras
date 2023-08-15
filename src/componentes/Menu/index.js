import styles from './Menu.module.css'
import MenuLink from '../MenuLink';

export default function Menu(){
    return (
        <header>
        <nav className={styles.navegacao}>
            <MenuLink to='/'>
                Jogadores
            </MenuLink>
            <MenuLink to='/sobremim'>
                Sobre Mim
            </MenuLink>
            <MenuLink to='/titulos'>
                Títulos
            </MenuLink>
        </nav>
    </header>
    )
    
}