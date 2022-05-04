import React, { Component } from 'react';

class Contry extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            Contry:'india'
        };
    }
    changecontry = () => {
        this.setState({
            Contry:'UK'
        })
    }
    
    render() {
        return (
            <>
                <div>
                    Contry :{this.state.Contry}
                    </div>
                <button onClick={() => this.changecontry()}>Change</button>
            </>
        )
    }
}

export default Contry;