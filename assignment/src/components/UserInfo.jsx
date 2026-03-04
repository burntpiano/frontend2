import { Component } from "react";

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

export default UserInfo;