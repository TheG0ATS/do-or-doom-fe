
import { useState } from 'react';
import Header from './Header';
import NewTaskForm from './NewTaskForm'; 
import TaskList from './TaskList';
import Footer from './Footer';
import useResource from '../hooks/useResource'
import styles from '../styles/Home.module.scss'

export default function TaskListAdmin() {
  const [taskData, settaskData] = useState([]);
  const { resources, deleteResource } = useResource();
  function storeCreationHandler(newtaskData) {

    settaskData([...taskData, newtaskData]);
  }

  return (<>
    <Header />
    <h1>Task List</h1>
    <main className={styles}>
      <NewTaskForm onCreate={storeCreationHandler}/>
      <TaskList taskData={resources || []} deleteTask={deleteResource} />
    </main>
    <Footer taskData={resources || []}/>

  </>)

}