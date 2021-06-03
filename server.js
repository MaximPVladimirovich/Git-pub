const express = require(`express`);
const app = express();
const port = 3000;

// Drinks database
const drinks = require(`./models/drinks`)

app.get(`/drinks`, (req, res) => {
    res.render(`drinks_index.ejs`, {
        drinks
    })
})

app.get(`/drinks/:id`, (req, res) => {
    res.render(`drinks_show.ejs`, { drinks: drinks[req.params.id] })
})


app.listen(3000, () => {
    console.log(`Listening to port:${port}`)
})