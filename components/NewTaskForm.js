
import useResource from '../hooks/useResource';
import { useAuth } from "../contexts/auth";
import styles from '../styles/Home.module.scss'

export default function NewTaskForm({ onCreate }) {

    const { user } = useAuth();
    const { createResource } = useResource();

    function handleCreate(e) {
        e.preventDefault();
        var taskData = {}
        taskData["title"] = e.target.title.value;
        taskData["description"] = e.target.description.value;
        taskData["completed"] = false;
        taskData["due"] = e.target.due.value;
        taskData["owner"] = user.id;
        createResource(taskData);
        e.target.reset();
    }

    return <div className={styles.newtaskform}>
        <h2>Add New Task</h2>
            <form onSubmit={handleCreate}>
                <div>
                    <div className={styles.taskformdetails}>
                        <label>Title: </label>
                        <input name='title' placeholder='Enter a new task' required />
                    </div>
                </div>
                <div>
                    <div className={styles.taskformdetails}>
                        <label>Description: </label>
                        <input name='description' placeholder='Describe your task' />
                    </div>
                    <div className={styles.taskformdetails}>
                        <label>Due date: </label>
                        <input name='due' placeholder='yyyy-mm-dd' />
                    </div>
                    <button></button>
                </div>


            </form>
    </div>
  }