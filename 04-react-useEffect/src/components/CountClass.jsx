import { Component } from 'react'

export default class CountClass extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
        }
    }

    increment = () => {
        this.setState((previousState) => ({
            count: previousState.count + 1,
        }))
    }

    decrement = () => {
        this.setState((previousState) => ({
            count: previousState.count - 1,
        }))
    }

    render() {
        return (
            <div>
                <h2>This counter app using class</h2>
                {/* Mistake was calling this.count instead of this.state.count */}
                <p>The count is {this.state.count}</p>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        )
    }
}
