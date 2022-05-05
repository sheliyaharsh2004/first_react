import React, { useState } from 'react';

function CountryFun(props) {

    const [Country , setcountry] = useState('india');
    const [gdp, sectGdp] = useState(2.62);

    const changecontry = () => {
        setcountry('UK')
    }

    return (
        <div>
            <p>Country [function based Component] : {Country}</p>
            <button onClick={() => changecontry()}> change </button>

            <p> Gdp : {gdp} </p>
            <button onClick={() => sectGdp(5.62)}> change gdp </button>
        </div>
    );
}

export default CountryFun;