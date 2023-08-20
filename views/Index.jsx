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
        { pokemons.length === 0 ? <h2>Sorry no Pokemon to show</h2> : 
            pokemons?.map((pokemon, index) => {
            // pokemon.name.split('').forEach(( letter, index ) => {
            //     index === 0 && letter.toUpperCase
            // })
            let firstLetter = pokemon?.name[0].toUpperCase()
            let rest = pokemon?.name.substring(1)


            return (
                <>
                    <li style={{ display: "flex", }}>
                            <img src="https://www.freeiconspng.com/thumbs/pokeball-png/pokeball-transparent-png-2.png" alt="pokeball" style={{ height: '30px', }} />
                        <a href={`/pokemon/${pokemon._id}`} key={index} style={ linkStyle }>
                            <span style={{ margin: "10px" }}>{ pokemon?.name.charAt(0).toUpperCase() + rest }</span>
                        </a>
                    </li>
                    <br />
                    <span>{String(pokemon._id)}</span>
                    <a href={`/pokemon/edit/${pokemon._id}`}>
                        <button>Edit</button>
                    </a>
                    <form action={`/pokemon/${pokemon._id}?_method=DELETE`} method="POST">
                        {/*  */}
                        {/* shoutout Q */}
                        <button style={{ backgroundColor: "crimson" }}>DELETE</button>
                    </form>
                    <hr />
                </>
            )
        }) }
      </ul>
    </div>
  )
}

export default Index
