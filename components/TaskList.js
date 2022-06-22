
import Accordion from "../components/Accordion";
export default function TaskList({ taskData }) {
    const styles = {
        fontFamily: "Roboto"
      };
    console.log(taskData)


    return (
        <div style={styles}>
        {taskData.map((task, idx) => {
            return(
            <Accordion 
            title={task.title} 
            content={task.description}
            due={task.due} 
            key={idx} />

            )
        })}
        </div>
    )

   
  }


