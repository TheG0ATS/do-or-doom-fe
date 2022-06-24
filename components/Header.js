import { Container } from 'postcss'
import styles from '../styles/Home.module.scss'

export default function Header() {
    return <header className={styles.header}>
        <div></div>
        <nav>
            <img src="/logo.png"/>
        </nav>
    </header>
  }