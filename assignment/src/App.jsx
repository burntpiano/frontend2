import './App.css'
import {ClickCounter, Greeting, TaskForm, UserInfo, TaskComponent} from './components';

function handleClick() {
        alert("Hah! Spooked ya!");
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
            <TaskForm taskArr={taskArr} />
            <UserInfo handleClick={handleClick} />
            <TaskComponent taskArr={taskArr} />
            <ClickCounter />
        </div>
    )
}

export default App
