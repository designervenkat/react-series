import { Component } from 'react'

export default class Count extends Component {
    constructor(props) {
        super(props)
        this.state = {
            windowWidth: window.innerWidth,
        }
    }

    componentDidMount() {
        // LifeCycle func - when component mounts/loads/render
        console.log('The app component loaded')
    }

    componentDidUpdate(prevProps) {
        // LifeCycle func - when component props changes / update
        console.log('The app component updated')
    }

    componentWillUnmount() {
        // LifeCycle func - when component unmounts/clean up function
        console.log('The app component cleanup')
    }

    render() {
        return (
            <div className="">
                <h2>React useEffect Hook</h2>
                <h2>The window width is : {this.state.windowWidth}</h2>
            </div>
        )
    }
}
