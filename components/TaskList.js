
import useResource from '../hooks/useResource';
import Accordion from "../components/Accordion";
export default function TaskList({ taskData}) {
    const styles = {
        fontFamily: "Roboto"
      };
    console.log(taskData)

    const { deleteResource , updateResource } = useResource();

    function handlePut(taskData) {
        // e.preventDefault();
        // var taskData = {}
        // taskData["title"] = taskData.title;
        // taskData["description"] = taskData.description;
        // console.log("completed :",taskData.completed)
        taskData["completed"] = !taskData.completed;
        // taskData["due"] = taskData.due;
        // taskData["owner"] = taskData.id;
        console.log("inside handle put:" , taskData)
        updateResource(taskData);
        // e.target.reset();
    }


    return (
        <div style={styles}>
        {taskData.map((task, idx) => {
            return(
            <>

            <Accordion 
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



