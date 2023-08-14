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
        { pokemons.map((pokemon) => {
            return <li>{pokemon.name}</li>
        }) }
      </ul>
    </div>
  )
}

export default Index
