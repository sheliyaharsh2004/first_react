import React, { Component } from 'react';

class Contry extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            Contry:'india',
            PM:'Narendra Modi'
        };
    }
    changecontry = () => {
        this.setState({
            Contry:'UK',
            PM:'Boris Johnson'
        })
    }
    
    render() {
        return (
            <>
                <div>
                    Contry :{this.state.Contry}
                    <br/>
                    PM:{this.state.PM}
                    </div>
                <button onClick={() => this.changecontry()}>Change</button>
            </>
        )
    }
}

export default Contry;