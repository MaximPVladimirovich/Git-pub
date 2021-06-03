const express = require(`express`);
const app = express();
const port = 3000;

// Drinks database
const drinks = require(`./models/drinks`)
const food = require(`./models/food`)


app.get(`/drinks`, (req, res) => {
    res.render(`drinks_index.ejs`, {
        drinks, food
    })
})
app.get(`/food/:id`, (req, res) => {
    res.render(`food_show.ejs`, {
        food: food[req.params.id]
    })
})

app.get(`/drinks/:id`, (req, res) => {
    res.render(`drinks_show.ejs`, { drinks: drinks[req.params.id] })
})


app.listen(3000, () => {
    console.log(`Listening to port:${port}`)
})