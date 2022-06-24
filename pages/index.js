import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { useAuth } from '../contexts/auth'
import TaskListAdmin from '../components/TaskListAdmin';
import LoginForm from '../components/LoginForm';

import React, { useState } from "react";

export default function Home() {

  const { user, login } = useAuth();
  const [bg, setBg] = useState("https://raw.githubusercontent.com/TheG0ATS/do-or-doom-fe/dev/public/635988.jpg");
  
  const changeStyle = () => {
    
    setBg("");
  };

  return (
    <div className={styles.cover}
    style={{ 
      backgroundImage: `url("${bg}")` 
    }}>
      <Head>
        <title>Do or DOOM</title>
      </Head>
      {user ?
        <TaskListAdmin />
        :
        <LoginForm onLogin={login} bg={changeStyle}/>
      }
    </div>
  )
}
