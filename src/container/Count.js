import React, { useState } from 'react';

function Count(props) {

    const [Count , setCount] = useState(0);

    const AddItem = () => {
        if(Count < 10 ){
            setCount(Count + 1);
        }
    }

    const removeItem = () => {
        if(Count > 0){
            setCount(Count -1);
        }
    }

    return (
        <div>
            <button type="button" onClick={() => removeItem()}>Remove</button>

            <input type="text" value={Count.toLocaleString()} />

            <button type="button" onClick={() => AddItem()}>Add</button>
        </div>
    );
}

export default Count;