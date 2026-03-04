import './App.css'
import {useState} from 'react'
import {ClickCounter, Greeting, TaskForm, UserInfo} from './components';

function handleClick() {
        alert("Hah! Spooked ya!");
    }

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

const taskArr = [
"Do the dishes",
"Take out the trash",
"Mow the lawn",
"Clean the bathroom",
"Vacuum the house"
];


function App() {
    return (
        <div>
            <Greeting username={"Alice"} />
            <Greeting username={"Bob"} />
            <TaskForm />
            <UserInfo handleClick={handleClick} />
            <TaskComponent taskArr={taskArr} />
            <ClickCounter />
        </div>
    )
}

export default App
