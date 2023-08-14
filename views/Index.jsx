import React from 'react'

const Index = ( { pokemons } ) => {

    const myStyle = {
        color: '#ffffff',
        backgroundColor: '#000000',
    };

  return (
    <div style={myStyle}>
      <h1>See All The Pokemon!'</h1>

      <ul>
        { pokemons.map((pokemon, index) => {
            return (
                <a href={`/pokemon/${index}`} key={index}>
                    <li>{pokemon.name}</li>
                </a>
            )
        }) }
      </ul>
    </div>
  )
}

export default Index
