import styles from '../styles/Home.module.scss'

export default function Footer({ taskData }) {
    let notCompleted = taskData.filter(item => (item.completed == false));
    let count = notCompleted.length
    return <footer className={styles.footer}>
        {/* <section><p>{count} Tasks on your list.</p></section> */}
        <div><div>
            <p>Do or Doom © by TheG0ATS</p>
        </div></div>
    </footer>
  }