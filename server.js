const express = require("express")
const app = express()

const PORT = 3000

const pokemon = require('./models/pokemon')
// MIDDLEWARE



// ROUTES
app.get('/', ( req, res ) => {
    res.send(`<h1>Welcome to the Pokemon App!</h1>`)
})
app.get('/pokemon', ( req, res ) => {
    res.send(pokemon)
})





app.listen(PORT, ( req, res ) => {
    console.log(`Server is running on port ${PORT}`)
})