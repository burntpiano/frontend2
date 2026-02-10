import {Component, useState} from 'react'
import './App.css'

function Greeting () {

    function fingerPrint() {
        const userAgent = navigator.userAgent;
        const platform = navigator.platform;
        const language = navigator.language;
        return `You should be more careful.
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
                Welcome to React!
            </h1>
            <p style={{ color: 'red' }}>
                This is inline styling
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
                <p>
                    Your lucky number is {this.state.randomNum}
                </p>
            </div>
        )
    }
}

const tasks = [
    'do dishes',
    'vacuum',
    'sweep',
    'do laundry',
    'summon beelzebub',
    'ascend from this mortal plane'
]

function TaskComponent () {
    function getRandomTask() {
        const randomIndex = Math.floor(Math.random() * tasks.length);
        return tasks[randomIndex];
    }

    const [task, setTask] = useState(getRandomTask());

    return (
        <h3>
            Your task for the day is: {task}
        </h3>
    )
}

function App() {
    return (
        <div>
            <Greeting />
            <UserInfo />
            <TaskComponent />
        </div>
    )
}

export default App
