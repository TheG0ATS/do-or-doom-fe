
export default function TaskList({ taskData }) {

    console.log(taskData)

    return (
        <tbody>
            <tr>
                {taskData.map((item) => {
                    return (<td>{item.title}</td>)
                    })}
            </tr>

        </tbody>
    )

   
  }