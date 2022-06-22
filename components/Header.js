import styles from '../styles/Home.module.scss'

export default function Header() {
    return <header className='bg-[rgb(21,185,129)] py-6 px-5 text-4xl'>
        <h1 className={styles}>Task List</h1>
    </header>
  }