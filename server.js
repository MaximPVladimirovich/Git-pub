const express = require(`express`);
const app = express();
const port = 3000;

// Drinks database
const drinks = require(`./models/drinks`)

app.get(`/`, (req, res) => {
    res.send(drinks)
})


app.listen(3000, () => {
    console.log(`Listening to port:${port}`)
})