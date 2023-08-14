const express = require("express")
const app = express()

const PORT = 3000

const pokemons = require('./models/pokemon')

// MIDDLEWARE
// view engine
app.set("view engine", "jsx")
app.engine("jsx", require("express-react-views").createEngine())

// runs between all routes
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

// tell express to use the middleware.. view body of a post request
app.use(express.urlencoded({extended:false}));



// ROUTES
app.get('/', ( req, res ) => {
    res.send(`<h1>Welcome to the Pokemon App!</h1>`)
})
app.get('/pokemon', ( req, res ) => {
    // res.send(pokemons)
    res.render("Index", { pokemons : pokemons }) // dont like the plural but...
})

app.get('/pokemon/new', (  req, res ) => {
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





app.listen(PORT, ( req, res ) => {
    console.log(`Server is running on port ${PORT}`)
})