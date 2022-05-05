import React, { Component } from 'react';

class City extends Component {

    constructor(props) {
        super(props);
        this.state = {
            City : 'surat'
        };
    }
    changcity = () => {
        this.setState ({
            City : 'Ahmedabad'
        })
    }

    render() {
        return (
            <>
                <div>
                    City :{this.state.City}
                </div>
                <button onClick={() => this.changcity()}>Change</button>
            </>
        );
    }
}

export default City;