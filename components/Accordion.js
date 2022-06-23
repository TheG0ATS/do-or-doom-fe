import { useState } from "react";
import styles from '../styles/Home.module.scss'

export default function Accordion(props) {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  

  return (
    <div
      style={{
        width: "100%",
        marginBottom: "15px",
        lineHeight: "15px",
        border: "1px solid rgba(209, 213, 219, 0.5)"
      }}
    >
      <button
        style={{
          width: "100%",
          position: "relative",
          textAlign: "left",
          padding: "4px",
          border: "none",
          background: "transparent",
          outline: "none",
          cursor: "pointer"
        }}
        onClick={toggle}
        type="button"
      >
        <h2>{props.title}</h2>
      </button>
      <div
        style={{ display: isShowing ? "block" : "none", padding: "5px" }}
        dangerouslySetInnerHTML={{__html: props.content}}
      />
      <div
        style={{ display: isShowing ? "block" : "none", padding: "5px" }}
        dangerouslySetInnerHTML={{__html: props.due}}
      />
       
      <DoneButton toggleDone={props.updateResource} taskData={props.taskData}/>
      <DeleteButton deleteTask={props.deleteTask} id={props.id}/>
    </div>
  
  );
}

function DeleteButton(props) {

  function clickHandler() {
      props.deleteTask(props.id);
  }

  return(
    <button onClick={clickHandler} className={styles.del}>
      {/* 
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg> 
        delete
        */}
    </button>
  )
}

function DoneButton(props) {

  function clickHandler() {
      props.toggleDone(props.taskData);
  }

  function uncheckedBox() {
    return (
      <label>
      Task Complete
      <input checked={false} type='checkbox' onChange={clickHandler}/>
      </label>
    )
  }

  function checkedBox() {
    return (
      <label>
      Task Complete
      <input checked={true} type='checkbox' onChange={clickHandler}/>
      </label>
    )
  }


  return(

    props.taskData.completed ? checkedBox() : uncheckedBox()

  )
}
