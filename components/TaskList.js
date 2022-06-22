
import useResource from '../hooks/useResource';
import Accordion from "../components/Accordion";
export default function TaskList({ taskData}) {
    const styles = {
        fontFamily: "Roboto"
      };


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


    return (
        <div style={styles}>
        {taskData.map((task, idx) => {
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
    )

   
  }



