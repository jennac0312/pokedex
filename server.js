const express = require("express")
const app = express()
const PORT = 3000

require("dotenv").config() 
const mongoose = require("mongoose")
const MONGO_URI = process.env.MONGO_URI

const Pokemon = require('./models/Pokemon') // schema
const pokemons = require('./utilities/pokemon') // for seed

// MIDDLEWARE
// view engine
app.set("view engine", "jsx")
app.engine("jsx", require("express-react-views").createEngine())

// runs between all routes
app.use((req, res, next) => {
    console.log('I run for all routes');
    next(); // calls next step
});

// tell express to use the middleware.. view body of a post request
app.use(express.urlencoded({extended:false}));

// connect to DB
mongoose.connect( MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})



// ROUTES
app.get('/', ( req, res ) => {
    res.send(`<h1>Welcome to the Pokemon App!</h1>`)
})

// SEED
app.get('/pokemon/seed',async(req,res)=>{
    //Deleting All Current Data(optional)
    await Pokemon.deleteMany({}) //PokemonSchema
    //create a list of pokemon
    await Pokemon.create(pokemons) //imported pokemon data array
    res.redirect('/pokemon')
})

app.get('/pokemon', async ( req, res ) => {
    // res.send(pokemons)

    try {
        const allPokemon = await Pokemon.find({})
        res.render("Index", { pokemons : allPokemon }) // dont like the plural but...
    } catch (error) {
        res.status(500).send( "Server Error" )
    }
})

app.get('/pokemon/new', ( req, res ) => {
    res.render("New")
})



// route matches path from FORM ACTION ATTRIBUTE
app.post('/pokemon', ( req, res ) => {
    // const newPokemon = await req.body
    
    // res.send(newPokemon)
    console.log( req.body )
    pokemons.push( req.body )
    // res.send('data received')
    res.redirect('/pokemon')
})



app.get('/pokemon/:id', ( req, res ) => {
    // res.send( req.params.id )
    
    let { id } = req.params
    res.render("Show", { pokemon : pokemons[id] })
})



// API
const fetchPokemon = async (name) => {
    const response = await fetch(`https://pokeapi.co/api/v2/${name}`)
    console.log(response)
}


mongoose.connection.once( 'open', () => {
    console.log('Connected to database')
    app.listen(PORT, ( req, res ) => {
        console.log(`Server is running on port ${PORT}`)
    })
})