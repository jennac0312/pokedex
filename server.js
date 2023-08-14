const express = require("express")
const app = express()

const PORT = 3000

const pokemons = require('./models/pokemon')

// MIDDLEWARE
// view engine
app.set("view engine", "jsx")
app.engine("jsx", require("express-react-views").createEngine())




// ROUTES
app.get('/', ( req, res ) => {
    res.send(`<h1>Welcome to the Pokemon App!</h1>`)
})
app.get('/pokemon', ( req, res ) => {
    // res.send(pokemons)
    res.render("Index", { pokemons : pokemons }) // dont like the plural but...
})

app.get('/pokemon/:id', ( req, res ) => {
    res.send( req.params.id )
})





app.listen(PORT, ( req, res ) => {
    console.log(`Server is running on port ${PORT}`)
})