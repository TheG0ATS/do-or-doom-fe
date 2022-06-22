
import useResource from '../hooks/useResource';
import { useAuth } from "../contexts/auth";

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

    return <div className='justify-center w-5/6'>
            <form onSubmit={handleCreate} className='flex-wrap p-2 rounded-md my-10 bg-[rgb(168,244,208)]'>
                <div className='flex py-2'>
                    <div className="flex flex-col font-bold text-center w-4/5 px-10">
                        <label className='px-2'>ADD TASK </label>
                        <input name='title' className='flex-auto px-2' placeholder='Enter a new task' required />
                    </div>
                    <button className='px-16 py-2 m-2 bg-[rgb(21,185,129)] rounded'>CREATE TASK</button>
                </div>
                <div className='flex space-x-2 py-8'>
                    <div className='flex flex-col font-bold bg-[rgb(168,244,208)] px-20 rounded'>
                        <label>DESCRIPTION</label>
                        <input name='description' placeholder='Describe your task' />
                    </div>
                    <div className='flex flex-col font-bold bg-[rgb(168,244,208)] px-20 rounded'>
                        <label>DUE DATE</label>
                        <input name='due' placeholder='2222-05-30' />
                    </div>
                </div>


            </form>
    </div>
  }