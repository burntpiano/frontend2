import { useState } from "react";
function TaskComponent ({taskArr}) {
    function getRandomTask() {
        const randomIndex = Math.floor(Math.random() * taskArr.length);
        return taskArr[randomIndex];
    }
    
    const [task] = useState(getRandomTask());

    return (
        <div>
            <h3>
                These are the tasks that need to be done:
                <ul>
                    {taskArr.map((task, index) => <li key={index}>{task} - {index + 1}</li>)}
                </ul>
            </h3>
            <h3>
                And you will start with: {task}
            </h3>
        </div>
    )
}

export default TaskComponent;