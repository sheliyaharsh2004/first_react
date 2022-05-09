import React from 'react';

function Course({coursename}) {
    return (
        <div>
             {
            coursename === 'rnw1' ? <p>coures name :Android</p> : <p>coures name :Node js</p>
            }
        </div>
    );
}

export default Course;