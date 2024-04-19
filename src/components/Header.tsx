import styles from './Header.module.css';
import logo from '../assets/todo_logo.svg'

export function Header() {
  return <header className={styles.header}>
    <img alt="Todo Logo" src={ logo } className={styles.logo}/>
  </header>
}