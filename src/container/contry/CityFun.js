import React, { useState } from 'react';

function CityFun(props) {

    const [City , setcity] = useState('surat');

    const changecity = () => {
        setcity('Ahmedabad')
    }

    return (
        <div>
            <p>City [function based Component] : {City}</p>
            <button onClick={() => changecity()}> change </button>
        </div>
    );
}

export default CityFun;