import React from 'react';

function Home({data}) {
    return (
        data.map((d, i) => {
            return(
                <>
                <h1>{d.id}</h1>
                <h2>{d.name}</h2>
                </>
            )
        })
    );
}

export default Home;