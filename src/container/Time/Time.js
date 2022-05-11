import React, { Component } from 'react';

class Time extends Component {

    constructor(props) {
        super(props);
        
        this.state ={
            time:new Date()  
        }
    }

    tick = () => {
        this.setState({
            time:new Date()
        })
        console.log("Tick");
    }
    
    componentDidMount = () => {
        this.timid = setInterval (() => this.tick(),1000)
    }

    componentDidUpdate = (prevProps , prevState) => {
        if (prevState.time !== this.state.time){
            console.log("componentDidUpdate called")
        }
    }

    componentwillunmount = () => {
        clearImmediate (this.timeid);
    }

    render() {
        return (
            <div>
                {
                    this.state.time.toLocaleString()
                }
            </div>
        );
    }
}

export default Time;