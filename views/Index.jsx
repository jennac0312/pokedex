import React from 'react'

const Index = ( { pokemons } ) => {

    const myStyle = {
        color: '#ffffff',
        backgroundColor: 'skyblue',
        fontSize: "2em",
    };

    const linkStyle = {
        textDecoration: "none",
        color: 'slategrey',
        fontWeight: "bold",
        listStyle: "none",
        margin: '10px',
        display: 'flex',
        alignItems: "center",
        justifyContent: "left"
    }

  return (
    <div style={myStyle}>
      <h1>See All The Pokemon!'</h1>
      <a href="/pokemon/new">Create a New Pokemon</a>


      <ul>
        { pokemons?.map((pokemon, index) => {
            // pokemon.name.split('').forEach(( letter, index ) => {
            //     index === 0 && letter.toUpperCase
            // })
            let firstLetter = pokemon?.name[0].toUpperCase()
            let rest = pokemon?.name.substring(1)


            return (
                <a href={`/pokemon/${index}`} key={index} style={ linkStyle }>
                    <li>
                        <img src="https://www.freeiconspng.com/thumbs/pokeball-png/pokeball-transparent-png-2.png" alt="pokeball" style={{ height: '30px', marginRight: "10px" }} />
                        <span>{ pokemon?.name.charAt(0).toUpperCase() + rest }</span>
                        
                    </li>
                </a>
            )
        }) }
      </ul>
    </div>
  )
}

export default Index
