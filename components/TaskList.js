
import useResource from '../hooks/useResource';
import Accordion from "../components/Accordion";
export default function TaskList({ taskData, deleteStand }) {
    const styles = {
        fontFamily: "Roboto"
      };
    console.log(taskData)

    const { deleteResource } = useResource();

    // function handlePut(e) {
    //     e.preventDefault();
    //     var taskData = {}
    //     taskData["title"] = taskData.title;
    //     taskData["description"] = taskData.description;
    //     taskData["completed"] = true;
    //     taskData["due"] = taskData.due;
    //     taskData["owner"] = taskData.id;
    //     updateResource(taskData);
    //     e.target.reset();
    // }


    return (
        <div style={styles}>
        {taskData.map((task, idx) => {
            return(
            <>
            {/* <form onSubmit={handlePut}>
            <label className='px-2'>Is complete? </label>
            <button
            name="completed"
            type="submit"
            className="px-12 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
            ></button> 
            </form> */}
            <DeleteButton deleteStand={deleteResource} id={task.id}
            />
            <Accordion 
            title={task.title} 
            content={task.description}
            due={task.due} 
            com={task.completed}
            key={idx} />
            </>
            )
        })}
        </div>
    )

   
  }

  function DeleteButton(props) {

    function clickHandler() {
        props.deleteStand(props.id);
    }
  
    return(
      <button onClick={clickHandler}>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
      </button>
    )
  }


