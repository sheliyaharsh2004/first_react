import React, { useState } from 'react';

function CountryFun(props) {

    const [Country , setcountry] = useState('india');
    const [PM , setpm] = useState('Narendra Modi');
    const [gdp, sectGdp] = useState(2.62);

    const changecontry = () => {
        setcountry('UK')
        setpm('Boris Johnson')
    }

    return (
        <div>
            <p>Country [function based Component] : {Country}</p>
            <p>PM [function based Component] : {PM}</p>
            <button onClick={() => changecontry()}> change </button>

            <p> Gdp : {gdp} </p>
            <button onClick={() => sectGdp(5.62)}> change gdp </button>
        </div>
    );
}

export default CountryFun;