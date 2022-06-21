
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useAuth } from '../contexts/auth'
import TaskListAdmin from '../components/TaskListAdmin';
import LoginForm from '../components/LoginForm';

export default function Home() {

  const { user, login } = useAuth();

  return (
    <div>
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
