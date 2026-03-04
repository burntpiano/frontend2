import { useState } from "react";

function TaskForm({ addTask }) {
    const [taskName, setTaskName] = useState("");

    function submitTask(e) {
        e.preventDefault();
        console.log(taskName);
        setTaskName('');
    }

    return (
        <form onSubmit={submitTask}>
            <input
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
            />
            <button type="submit">Add Task</button>
        </form>
    );
}

export default TaskForm;