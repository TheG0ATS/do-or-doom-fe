
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { useAuth } from '../contexts/auth'
import TaskListAdmin from '../components/TaskListAdmin';
import LoginForm from '../components/LoginForm';

export default function Home() {

  const { user, login } = useAuth();

  return (
    <div className={styles}>
      <Head>
        <title>Do or DOOM</title>
      </Head>
      {user ?
        <TaskListAdmin />
        :
        <LoginForm onLogin={login} />
      }

    </div>
  )
}
