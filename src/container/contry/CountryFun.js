import React, { useState } from 'react';
import New_Citychange from './New_Citychange';

function CountryFun({Gbpval}) {

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
            <button onClick={() => sectGdp(Gbpval)}> change gdp </button>

            <New_Citychange famplace={Country} />
        </div>
    );
}

export default CountryFun;