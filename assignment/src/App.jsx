import {Component, useState} from 'react'
import './App.css'
import TaskForm from './components/TaskForm';

function Greeting({username}) {
    
    function fingerPrint() {
        const userAgent = navigator.userAgent;
        const platform = navigator.platform;
        const language = navigator.language;
        return `...but I know a lot about you.
        \nI can see your user agent: 
        ${userAgent}
        \nyour platform: 
        ${platform}
        \nand your language: 
        ${language}
        \nYou should give LibreWolf a try.`;

    }

    return (
        <div>
            <h1>
                Hello, {username}.
            </h1>
            <p style={{ color: 'red' }}>
                I don't mean to alarm you...
            </p>
            <p className="fingerprint">
                {fingerPrint()}
            </p>
        </div>
    )
}

class UserInfo extends Component {
    state = {
        name: 'testName',
        profession: 'testJob',
        randomNum: this.genRandNum(1, 10)
    };

    genRandNum(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    
    
    render() {
        return (
    
            <div>
                <p>
                    Your name is {this.state.name}
                </p>
                <p>
                    Your profession is {this.state.profession}
                </p>
                <button onClick={this.props.handleClick}>
                    Spooky Alert Button!
                </button>
                <p>
                    Your lucky number is {this.state.randomNum}
                </p>
            </div>
        )
    }
}

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

function ClickCounter() {
    const [count, setCount] = useState(0);
    
    return (
    <div>
        <button onClick={() => setCount(count + 1)}>
            Clicky Clicky
        </button>
        <p>
            You have clickied the clicker {count} times.
        </p>
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
