import React from 'react';

function New_Citychange({famplace}) {
    return (
        <div>
            {
            famplace === 'india' ? <p>Famouplace :  The Red Fort</p> : <p>Famouplace : Royal Windsor</p>
            }
        </div>
    );
}

export default New_Citychange;