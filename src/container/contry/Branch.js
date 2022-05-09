import React, { useState } from 'react';
import Course from './Course';

function Branch(props) {

    const [branch , setBranch] = useState('rnw1')
    const [coures , setCourse] = useState('Android')

    const changecourse = () => {
        setBranch('rnw2')
        setCourse('Node js')
    }

    return (
        <div>
             <p>Branch : {branch}</p>
            <button onClick={() =>  changecourse()}> change </button>

            <Course  coursename={branch}/>
        </div>
    );
}

export default Branch;