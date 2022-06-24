import useResource from '../hooks/useResource';
import Accordion from "../components/Accordion";
import styles from '../styles/Home.module.scss'


export default function TaskList({ taskData }) {
    // const styles = {
    //     fontFamily: "Roboto"
    //   };

    const { deleteResource , updateResource } = useResource();

    function handlePut(taskData) {
        taskData["title"] = taskData.title;
        taskData["completed"] = !taskData.completed;
        taskData["due"] = taskData.due;
        taskData["owner"] = taskData.owner;
        taskData["id"] = taskData.id;
        updateResource(taskData);
        // e.target.reset();
    }

    let notCompleted = taskData.filter(item => (item.completed == false));
    let isCompleted = taskData.filter(item => (item.completed == true));
    return (
        <>
        <div className={styles.tasklist}>
        <h1 className={styles.listheader}>Pending Tasks ({notCompleted.length})</h1>
        {notCompleted.map((task, idx) => {
            return(
                
                <>
                <Accordion
                taskData={task} 
                title={task.title} 
                content={task.description}
                due={task.due} 
                com={task.completed}
                key={idx} 
                deleteTask={deleteResource} 
                updateResource={handlePut}
            // handlePut={handlePut}
                id={task.id}
                />
                </>
            )
        })}
        </div>

        <div className={styles.tasklist}>
        <h1 className={styles.listheader}>Done Tasks ({isCompleted.length})</h1>
        {isCompleted.map((task, idx) => {
            return(
                
                <>
                <Accordion
                taskData={task} 
                title={task.title} 
                content={task.description}
                due={task.due} 
                com={task.completed}
                key={idx} 
                deleteTask={deleteResource} 
                updateResource={handlePut}
            // handlePut={handlePut}
                id={task.id}
                />
                </>
            )
        })}
        </div>

        </>
    )

   
  }



