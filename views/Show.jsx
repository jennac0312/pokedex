import React from 'react'

const Show = ( { pokemon } ) => {
    return (
        <div>
            <h1>Gotta Catch 'Em All</h1>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.img + '.jpg'} alt={`picture of ${pokemon.name}`} />
            <a href="/pokemon" style={{display: 'block'}}>Back</a>
        </div>
    )
}

export default Show
